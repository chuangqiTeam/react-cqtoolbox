import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import domAlign from 'dom-align';
import classnames from 'classnames';

import Overlay from '../overlay';
import Portal from '../portal';

class Popup extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    align: PropTypes.object,
    mask: PropTypes.bool,
    theme: PropTypes.object,
    getRootDomNode: PropTypes.func,
    // onOverlayClick: PropTypes.func,
  }

  static defaultProps = {
    active: false,
  }

  componentDidMount() {
    const source = this.getPopupDomNode();
    const target = this.props.getRootDomNode();
    const align = this.props.align;
    this.setPopupAlign(source, target, align);
  }

  setPopupAlign = (sourceNode, targetNode, popupAlign) => {
    domAlign(sourceNode, targetNode, popupAlign);
  }

  getMaskElement = () => {
    const {theme, mask, active, onOverlayClick} = this.props;

    return mask ?
    <Overlay
      onClick={onOverlayClick}
      active={active}
      className={theme.overlay} /> : null;
  }

  getPopupElement = () => {
    const {children, theme, active} = this.props;

    const newProps = {
      key: 'popup',
      ref: 'popup',
    };

    const classes = classnames(theme.popup, {
      [theme.active]: active});

    return <div className={classes}>{React.cloneElement(children, newProps)}</div>;
  }

  getPopupDomNode = () => {
    return findDOMNode(this.refs.popup);
  }

  render () {
    return (
      <Portal>
        {this.getMaskElement()}
        {this.getPopupElement()}
      </Portal>
    );
  }
}

export default Popup;
