import theme from './theme.css';
import { FontIcon } from './FontIcon';
import {ICON} from '../identifiers';
import { themr } from 'react-css-themr';

const ThemedFontIcon = themr(ICON, theme)(FontIcon);

export default ThemedFontIcon;
export { ThemedFontIcon as FontIcon };
