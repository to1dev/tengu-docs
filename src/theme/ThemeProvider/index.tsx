import type {ReactNode} from 'react';
import {composeProviders} from '@docusaurus/theme-common';
import {
  AnnouncementBarProvider,
  ColorModeProvider,
  NavbarProvider,
  ScrollControllerProvider,
} from '@docusaurus/theme-common/internal';
import {DocsPreferredVersionContextProvider} from '@docusaurus/plugin-content-docs/client';
import OriginalThemeProvider from '@theme-original/ThemeProvider';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import SkipToContent from '@theme/SkipToContent';
import type {Props} from '@theme/ThemeProvider';

// Keep the navigation and its state outside lazy page routes. Replacing a page
// must not remove the navbar's DOM node or recreate its backdrop compositor.
const PersistentProviders = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  NavbarProvider,
]);

export default function ThemeProvider({children}: Props): ReactNode {
  return <OriginalThemeProvider>
    <PersistentProviders>
      <SkipToContent/>
      <AnnouncementBar/>
      <Navbar/>
      {children}
    </PersistentProviders>
  </OriginalThemeProvider>;
}
