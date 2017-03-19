import React, { cloneElement } from 'react';
import renderPopupComponent from './renderPopupComponent.js';
import pureRender from '../decorator/pureRender.js';

@renderPopupComponent
@pureRender
class Trigger extends React.Component {

  isClickAction() {
    const {action} = this.props;
    return action.indexOf('click') !== -1;
  }

  isHoverAction() {
    const {action} = this.props;
    return action.indexOf('hover') !== -1;
  }

  fireEvents = (type, e) => {
    const childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    const callback = this.props[type];
    if (callback) {
      callback(e);
    }
  }

  onClick = (event) => {
    event.preventDefault();
    this.fireEvents('onClick', event);
    this.props.setPopupVisible(!this.props.popupVisible);
  }

  onMouseEnter = (event) => {
    this.fireEvents('onMouseEnter', event);
    this.props.setPopupVisible(true);
  }

  onMouseLeave = (event) => {
    this.fireEvents('onMouseLeave', event);
    this.props.setPopupVisible(false);
  }

  render () {
    const {
      children,
    } = this.props;

    const child = React.Children.only(children);

    const newChildProps = {};

    if (this.isClickAction()) {
      newChildProps.onClick = this.onClick;
    } else {
      newChildProps.onClick = (e) => this.fireEvents('onClick', e);
    }

    if (this.isHoverAction()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseEnter = (e) => this.fireEvents('onMouseEnter', e);
      newChildProps.onMouseLeave = (e) => this.fireEvents('onMouseLeave', e);
    }

    return cloneElement(child, newChildProps);
  }
}

export default Trigger;
