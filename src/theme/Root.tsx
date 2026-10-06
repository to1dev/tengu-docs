import type {ReactNode} from 'react';
import {ThemeProvider} from '@site/src/themes/ThemeProvider';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return <ThemeProvider>{children}</ThemeProvider>;
}
