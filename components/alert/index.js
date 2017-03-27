import { themr } from 'react-css-themr';
import { ALERT } from '../identifiers';
import {alertFactory} from './Alert';
import FontIcon from '../font_icon';
import theme from './theme.css';

const ThemedAlert = themr(ALERT, theme)(alertFactory(FontIcon));
export default ThemedAlert;
export { ThemedAlert as Alert };
