export const visualThemes = [
  {id: 'jade', name: '玉庭', subtitle: 'JADE', description: '温润玉绿，舒展而宁静。', colors: ['#fafbf8', '#227451', '#13291f']},
  {id: 'cobalt', name: '澄蓝', subtitle: 'COBALT', description: '清晰蓝调，精确而有序。', colors: ['#f7f9fd', '#245bcc', '#101f3d']},
  {id: 'graphite', name: '石墨', subtitle: 'GRAPHITE', description: '克制灰阶，专注内容本身。', colors: ['#f8f9fa', '#3b4c60', '#171e28']},
  {id: 'amber', name: '暖砂', subtitle: 'SANDSTONE', description: '暖纸与铜色，从容阅读。', colors: ['#fbf8f2', '#8b581b', '#30251b']},
  {id: 'iris', name: '鸢尾', subtitle: 'IRIS', description: '柔和紫韵，轻盈而精致。', colors: ['#faf8fe', '#7552b7', '#261c3e']},
] as const;

export type VisualTheme = typeof visualThemes[number]['id'];
export const defaultVisualTheme: VisualTheme = 'jade';
export const themeStorageKey = 'tengu-visual-theme';
export function isVisualTheme(value: unknown): value is VisualTheme {
  return visualThemes.some(theme => theme.id === value);
}

// Apply the saved palette before the browser paints, without waiting for React.
export const themeBootstrap = `(()=>{let t=${JSON.stringify(defaultVisualTheme)};try{const v=localStorage.getItem(${JSON.stringify(themeStorageKey)});if(${JSON.stringify(visualThemes.map(theme => theme.id))}.includes(v))t=v}catch{}document.documentElement.setAttribute('data-tengu-theme',t)})();`;
