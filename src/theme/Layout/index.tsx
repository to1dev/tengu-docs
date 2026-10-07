/**
 * Adapted from Docusaurus theme-classic Layout (MIT), copyright Meta Platforms.
 * Navigation and SkipToContent now live in the persistent ThemeProvider.
 */
import type {ReactNode} from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {PageMetadata, SkipToContentFallbackId, ThemeClassNames} from '@docusaurus/theme-common';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import type {Props} from '@theme/Layout';
import styles from './styles.module.css';

export default function Layout({children, noFooter, wrapperClassName, title, description}: Props): ReactNode {
  return <LayoutProvider>
    <PageMetadata title={title} description={description}/>
    <div id={SkipToContentFallbackId} className={clsx(ThemeClassNames.layout.main.container, ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}>
      <ErrorBoundary fallback={params => <ErrorPageContent {...params}/>}>{children}</ErrorBoundary>
    </div>
    {!noFooter && <Footer/>}
  </LayoutProvider>;
}
