import Popup from './Popup';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { POPUP } from '../identifiers';

const ThemedPopup = themr(POPUP, theme)(Popup);

export default ThemedPopup;
export {ThemedPopup};
