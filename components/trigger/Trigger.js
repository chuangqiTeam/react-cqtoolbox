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
    const nextVisible = !this.props.popupVisible;
    this.props.setPopupVisible(nextVisible);
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

    return cloneElement(child, newChildProps);
  }
}

export default Trigger;
