import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers';
import { dialogFactory } from './Dialog';
import Overlay from '../overlay';
import Button from '../button';
import Portal from '../portal';
import theme from './theme.css';

const Dialog = dialogFactory(Overlay, Portal, Button);
const ThemedDialog = themr(DIALOG, theme)(Dialog);

export default ThemedDialog;
export { ThemedDialog as Dialog };
