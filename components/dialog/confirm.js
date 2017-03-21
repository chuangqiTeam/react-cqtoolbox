import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Dialog from './index.js';
import FontIcon from '../font_icon';
import Button from '../button';
import theme from './theme.css';

const defaults = {
  confirmText: '确定',
  cancelText: '取消',
  showCancel: false,
  showConfirm: true,
  className: '',
};

const factory = (options) => {

  function confirm(config) {
    const props = Object.assign({}, defaults, options, config);

    const div = document.createElement('div');
    document.body.appendChild(div);

    const unMount = () => {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }

    const handleClose = () => {
      unMount();
      if (props.onCancel) {
        props.onCancel();
      }
    };

    const handleConfirm = () => {
      unMount();
      if (props.onConfirm) {
        props.onConfirm();
      }
    }

    const body = (
      <div>
        <FontIcon className={theme.icon} value={props.iconType} />
        {props.title && <h6 className={theme.title}>{props.title}</h6>}
        {props.content && <p className={theme.content}>{props.content}</p>}
      </div>
    );

    const footer = (
      <div className={theme.navigation}>
        {props.showConfirm &&
          <Button
            raised
            primary
            onClick={handleConfirm}
            className={classnames(theme.button, theme.confirmButton)}
            label={props.confirmText} />}

        {props.showCancel &&
          <Button
            onClick={handleClose}
            className={classnames(theme.button)}
            label={props.cancelText}  />}
      </div>
    );

    const classes = classnames(theme[props.type], props.className);

    ReactDOM.render(
      <Dialog
        className={classes}
        active
        onEscKeyDown={handleClose}
        onOverlayClick={handleClose}>
        <div>
          {body} {footer}
        </div>
      </Dialog>
    , div);
  }

  return confirm;
}

export {factory as confirmFactory};
