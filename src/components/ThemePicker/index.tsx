import {useId, useRef, useState, type ReactNode} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import {visualThemes} from '@site/src/themes/catalog';
import {useVisualTheme} from '@site/src/themes/ThemeProvider';
import styles from './styles.module.css';

function PaletteIcon(): ReactNode {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18h1.3a2 2 0 0 0 1.4-3.4 1.6 1.6 0 0 1 1.1-2.7H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="11" cy="6.8" r=".8"/><circle cx="15.5" cy="8" r=".8"/></svg>;
}

export default function ThemePicker(): ReactNode {
  const {theme, setTheme} = useVisualTheme();
  const {colorMode, setColorMode} = useColorMode();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const dialogId = useId();
  const close = () => dialog.current?.close();

  const trapFocus = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };

  return <>
    <button ref={trigger} className={styles.trigger} type="button" aria-label="选择视觉主题" aria-haspopup="dialog" aria-expanded={open} aria-controls={dialogId} onClick={() => {dialog.current?.showModal(); setOpen(true);}}><PaletteIcon/><span>主题</span></button>
    <dialog ref={dialog} id={dialogId} className={styles.dialog} aria-labelledby={titleId} aria-describedby={descriptionId} onKeyDown={trapFocus} onClick={event => {if (event.target === event.currentTarget) {const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();}}} onClose={() => {setOpen(false); trigger.current?.focus();}}>
      <div className={styles.heading}><div><span className={styles.eyebrow}>MAKE IT YOURS</span><h2 id={titleId}>选择你的阅读氛围</h2><p id={descriptionId}>五种气质，同样清晰的体验。</p></div><button type="button" className={styles.close} aria-label="关闭主题选择" onClick={close}><span aria-hidden="true">×</span></button></div>
      <div className={styles.options} aria-label="视觉主题">
        {visualThemes.map(option => <button key={option.id} type="button" className={styles.option} aria-label={`${option.name}主题`} aria-pressed={theme === option.id} onClick={() => setTheme(option.id)}>
          <div className={styles.preview} style={{background: option.colors[0], color: option.colors[2]}} aria-hidden="true"><div className={styles.previewNav}><span style={{background: option.colors[1]}}/><i/><i/></div><div className={styles.previewBody}><div><i style={{background: option.colors[2]}}/><i style={{background: option.colors[2]}}/><span style={{background: option.colors[1]}}/></div><div className={styles.previewPanel} style={{background: option.colors[1]}}><i/><i/><i/></div></div><div className={styles.swatches}>{option.colors.map(color => <span key={color} style={{background: color}}/>)}</div></div>
          <span className={styles.optionTitle}>{option.name}<span className={styles.check} aria-hidden="true">{theme === option.id ? '✓' : ''}</span></span><span className={styles.optionSubtitle}>{option.subtitle}</span><span className={styles.optionDescription}>{option.description}</span>
        </button>)}
      </div>
      <div className={styles.bottom}><div className={styles.mode} role="group" aria-label="明暗模式"><button type="button" aria-pressed={colorMode === 'light'} onClick={() => setColorMode('light')}>浅色</button><button type="button" aria-pressed={colorMode === 'dark'} onClick={() => setColorMode('dark')}>深色</button></div><span className={styles.saved} role="status">已选择{visualThemes.find(option => option.id === theme)?.name} · 自动记忆</span></div>
      <button type="button" className={styles.done} onClick={close}>完成选择 <span aria-hidden="true">↗</span></button>
    </dialog>
  </>;
}
