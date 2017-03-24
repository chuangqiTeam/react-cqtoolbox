import theme from './theme.css';
import { FontIcon, svgFontIconFactory } from './FontIcon';
import {ICON} from '../identifiers';
import { themr } from 'react-css-themr'
const ThemedFontIcon = themr(ICON, theme)(FontIcon);
import { CaretDown } from './CaretDown';



const CaretDownIcon = svgFontIconFactory(CaretDown);

export default ThemedFontIcon;
export { CaretDownIcon };
export { ThemedFontIcon as FontIcon };
