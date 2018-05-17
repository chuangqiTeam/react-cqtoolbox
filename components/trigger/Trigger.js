import React, {cloneElement, Component} from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Popup from '../popup';
import pureRender from '../decorator/pureRender.js';

class Trigger extends Component {
  static propTypes = {
    children: PropTypes.any,
    action: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    popup: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    mask: PropTypes.bool,
    maskClosable: PropTypes.bool,
    popupTheme: PropTypes.object,
    popupAlign: PropTypes.object,
    popupVisible: PropTypes.bool,
    matchTargetWidth: PropTypes.bool,
    onPopupVisibleChange: PropTypes.func
  }

  static defaultProps = {
    action: ['click'],
    mask: false,
    popupTheme: {},
    maskClosable: false,
    popupAlign: {
      points: [
        'tl', 'bl'
      ], // align top left point of sourceNode with top right point of targetNode
      offset: [
        0, 0
      ], // the offset sourceNode by 10px in x and 20px in y,
    },
    onPopupVisibleChange: () => void 0
  }

  constructor(props) {
    super(props);

    let popupVisible;
    if ('popupVisible' in props) {
      popupVisible = this.props.popupVisible;
    } else {
      popupVisible = false;
    }

    this.state = {
      popupVisible: popupVisible,
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('popupVisible' in nextProps &&
      this.props.popupVisible !== nextProps.popupVisible) {
      this.setState({ popupVisible: nextProps.popupVisible });
    }
  }

  setPopupVisible = (popupVisible) => {
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible,
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  }

  delaySetPopupVisible(popupVisible, delay) {
    this.clearDelayTimer();

    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.setPopupVisible(popupVisible);
        this.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(popupVisible);
    }
  }

  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  getRootDomNode = () => {
    return findDOMNode(this.refs._rootComponent);
  }

  getPopupElement = () => {
    const {
      mask,
      popup,
      popupAlign,
      popupTheme,
      popupVisible,
      matchTargetWidth,
    } = this.props;

    const popupProps = {};

    if (this.isHoverAction()) {
      popupProps.onMouseEnter = this.onPopupMouseEnter;
      popupProps.onMouseLeave = this.onPopupMouseLeave;
    }

    return (
      <Popup
        active={popupVisible}
        theme={popupTheme}
        mask={mask}
        align={popupAlign}
        {...popupProps}
        matchTargetWidth={matchTargetWidth}
        getRootDomNode={this.getRootDomNode}
        onRequestClose={this.setPopupVisible}>
        {typeof popup === 'function' ?
          popup() : popup}
      </Popup>
    );
  }

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
    this.setPopupVisible(!this.props.popupVisible);
  }

  onMouseEnter = (event) => {
    this.fireEvents('onMouseEnter', event);
    this.delaySetPopupVisible(true);
  }

  onMouseLeave = (event) => {
    this.fireEvents('onMouseLeave', event);
    this.delaySetPopupVisible(false, 100);
  }

  onPopupMouseEnter = () => {
    this.clearDelayTimer();
  }

  onPopupMouseLeave = () => {
    this.delaySetPopupVisible(false, 100);
  }

  render() {
    const {children,} = this.props;

    const child = React.Children.only(children);

    const newChildProps = {
      ref: "_rootComponent"
    };

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

export default pureRender(Trigger);
