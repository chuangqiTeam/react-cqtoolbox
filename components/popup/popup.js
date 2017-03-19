import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import domAlign from 'dom-align';
import classnames from 'classnames';
import events from '../utils/events.js';
import activableRenderer from '../decorator/activableRenderer.js';

import Overlay from '../overlay';
import Portal from '../portal';

@activableRenderer()
class Popup extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    align: PropTypes.object,
    mask: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
    matchTargetWidth: PropTypes.bool,
    getRootDomNode: PropTypes.func,
    onRequestClose: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    matchTargetWidth: false,
  }

  componentDidMount() {
    const source = this.getPopupDomNode();
    const target = this.props.getRootDomNode();
    const { active, align, matchTargetWidth } = this.props;

    // set popup width
    const widthProp = matchTargetWidth ? 'width' : 'minWidth';
    source.style[widthProp] = `${target.offsetWidth}px`;

    // set popup position
    this.setPopupAlign(source, target, align);

    if (active) {
      this.clickOutsideHandler = true;
      events.addEventsToDocument([{
        click: this.onDocumentClick,
      }]);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.active && !this.clickOutsideHandler) {
      this.clickOutsideHandler = true;
      events.addEventsToDocument({
        click: this.onDocumentClick,
      });
    }
  }

  componentWillUnmount() {
    this.removeEventsFromDocument();
  }

  removeEventsFromDocument = () => {
    this.clickOutsideHandler = false;
    events.removeEventsFromDocument({
      click: this.onDocumentClick,
    });
  }

  isHoverAction() {
    const {action} = this.props;
    return action.indexOf('hover') !== -1;
  }

  setPopupAlign = (sourceNode, targetNode, popupAlign) => {
    domAlign(sourceNode, targetNode, popupAlign);
  }

  onDocumentClick = (event) => {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }

    const rootNode = this.props.getRootDomNode();
    const popupNode = this.getPopupDomNode();

    if (!events.targetIsDescendant(event, rootNode) &&
    !events.targetIsDescendant(event, popupNode)) {
      this.props.onRequestClose(false);
    }
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
