import Popup from './Popup';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { POPUP } from '../identifiers';
import activableRenderer from '../decorator/activableRenderer.js';

const ActivablePopup = activableRenderer()(Popup);
const ThemedPopup = themr(POPUP, theme)(ActivablePopup);

export default ThemedPopup;
export {ThemedPopup as Popup};
