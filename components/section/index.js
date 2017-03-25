import { themr } from 'react-css-themr';
import { SECTION } from '../identifiers';
import Section from './Section';
import theme from './theme.css';
const ThemedSection = themr(SECTION, theme)(Section);

export default ThemedSection;
export { ThemedSection as Section };
