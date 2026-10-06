import type {ReactNode} from 'react';
import OriginalToggle from '@theme-original/Navbar/ColorModeToggle';
import type {Props} from '@theme/Navbar/ColorModeToggle';
import ThemePicker from '@site/src/components/ThemePicker';

export default function NavbarColorModeToggle(props: Props): ReactNode {
  return <><ThemePicker/><OriginalToggle {...props}/></>;
}
