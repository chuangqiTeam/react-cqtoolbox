import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers';
import { dialogFactory } from './Dialog';
import { confirmFactory } from './confirm';
import Overlay from '../overlay';
import Button from '../button';
import Portal from '../portal';

import theme from './theme.css';

const Dialog = dialogFactory(Overlay, Portal, Button);
const ThemedDialog = themr(DIALOG, theme)(Dialog);

export const confirm = confirmFactory({
  type: 'confirm',
  iconType: 'question-circle',
  showCancel: true,
});

export const success = confirmFactory({
  type: 'success',
  iconType: 'check-circle',
});

export const warning = confirmFactory({
  type: 'warning',
  iconType: 'exclamation-circle',
});

export const error = confirmFactory({
  type: 'error',
  iconType: 'cross-circle',
});

ThemedDialog.confirm = confirm;
ThemedDialog.success = success;
ThemedDialog.warning = warning;
ThemedDialog.error = error;

export default ThemedDialog;
