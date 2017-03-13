import React, { PropTypes, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import Popup from '../popup';
import events from '../utils/events.js';
import renderModalComponent from '../decorator/renderModalComponent.js';
import pureRender from '../decorator/pureRender.js';

@renderModalComponent
@pureRender
class Trigger extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    popup: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    mask: PropTypes.bool,
    maskClosable: PropTypes.bool,
    popupAlign: PropTypes.object,
    popupVisible: PropTypes.bool,
    onPopupVisibleChange: PropTypes.func,
  }

  static defaultProps = {
    action: ['click'],
    mask: false,
    maskClosable: false,
    popupAlign: {
      points: ['tl', 'bl'], // align top left point of sourceNode with top right point of targetNode
      offset: [0, 0], // the offset sourceNode by 10px in x and 20px in y,
    },
    onPopupVisibleChange: () => void 0,
  }

  state = {
    popupVisible: this.props.popupVisible,
  }

  componentDidMount() {
    if (this.state.popupVisible) {
      this.clickOutsideHandler = true;
      events.addEventsToDocument([{
        click: this.onDocumentClick,
      }]);

      this.props.renderModalComponent(this.getComponent());
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('popupVisible' in nextProps &&
      this.props.popupVisible !== nextProps.popupVisible) {
      this.setState({ popupVisible: nextProps.popupVisible });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const state = this.state;

    if (state.popupVisible && !this.clickOutsideHandler) {
      this.clickOutsideHandler = true;
      events.addEventsToDocument({
        click: this.onDocumentClick,
      });
      this.props.renderModalComponent(this.getComponent());

    } else {

      this.removeEventsFromDocument();
      this.props.renderModalComponent();
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

  onDocumentClick = (event) => {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }

    const root = this.getRootDomNode();
    const popupNode = this.getPopupDomNode();

    if (!events.targetIsDescendant(event, root) &&
    !events.targetIsDescendant(event, popupNode)) {
      this.setPopupVisible(false);
    }
  }

  isClickAction() {
    const {action} = this.props;
    return action.indexOf('click') !== -1;
  }

  isHoverAction() {
    const {action} = this.props;
    return action.indexOf('hover') !== -1;
  }

  getComponent = () => {
    const {
      mask,
      popup,
      popupAlign,
    } = this.props;

    return (
      <Popup
        mask={mask}
        align={popupAlign}
        getRootDomNode={this.getRootDomNode}
        innerRef={component => this._component = component}>
        {typeof popup === 'function' ?
          popup() : popup}
      </Popup>
    );
  }

  getPopupDomNode = () => {
    return this._component ?
      this._component.getPopupDomNode() : null;
  }

  getRootDomNode = () => {
    return findDOMNode(this);
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
    const nextVisible = !this.state.popupVisible;
    this.setPopupVisible(nextVisible);
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
