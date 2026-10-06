import {createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import {defaultVisualTheme, isVisualTheme, themeStorageKey, type VisualTheme} from './catalog';

const ThemeContext = createContext<{theme: VisualTheme; setTheme: (theme: VisualTheme) => void} | null>(null);

export function ThemeProvider({children}: {children: ReactNode}): ReactNode {
  const [theme, updateTheme] = useState<VisualTheme>(defaultVisualTheme);
  useEffect(() => {
    const apply = (value: unknown) => {
      const next = isVisualTheme(value) ? value : defaultVisualTheme;
      document.documentElement.setAttribute('data-tengu-theme', next);
      updateTheme(next);
    };
    apply(document.documentElement.getAttribute('data-tengu-theme'));
    const onStorage = (event: StorageEvent) => {
      if (event.key === themeStorageKey || event.key === null) apply(event.newValue);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setTheme = (next: VisualTheme) => {
    if (!isVisualTheme(next)) return;
    document.documentElement.setAttribute('data-tengu-theme', next);
    updateTheme(next);
    try { localStorage.setItem(themeStorageKey, next); } catch { /* Selection still works when storage is unavailable. */ }
  };
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}

export function useVisualTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('Visual themes require ThemeProvider');
  return value;
}
