import type {ReactNode} from 'react';
import {PluginHtmlClassNameProvider} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/Layout/Provider';

// Plugin classes require the current route context. Navigation providers live
// in the persistent ThemeProvider so they survive page transitions.
export default function LayoutProvider({children}: Props): ReactNode {
  return <PluginHtmlClassNameProvider>{children}</PluginHtmlClassNameProvider>;
}
