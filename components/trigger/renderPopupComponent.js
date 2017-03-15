import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import events from '../utils/events.js';
import Popup from '../popup';

const renderPopupComponent = (WrappedComponent) =>
  class PopupRender extends Component {
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

        this.props.renderPopupComponent(this.getComponent());
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
      } else {
        this.removeEventsFromDocument();
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

      const rootNode = this.getRootDomNode();
      const popupNode = this.getPopupDomNode();

      if (!events.targetIsDescendant(event, rootNode) &&
      !events.targetIsDescendant(event, popupNode)) {
        this.setPopupVisible(false);
      }
    }

    getRootDomNode = () => {
      return findDOMNode(this.refs._rootComponent);
    }

    getPopupDomNode = () => {
      return this._popupComponent.refs.innerComponent.getPopupDomNode();
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

    render() {
      const {
        mask,
        popup,
        popupAlign,
        maskClosable, // eslint-disable-line
        onPopupVisibleChange, // eslint-disable-line
        ...other,
      } = this.props;

      const {
        popupVisible,
      } = this.state;

      return (
        <div>
          <Popup
            active={popupVisible}
            mask={mask}
            align={popupAlign}
            innerRef={component => this._popupComponent = component}
            getRootDomNode={this.getRootDomNode}>
            {typeof popup === 'function' ?
              popup() : popup}
          </Popup>
          <WrappedComponent
            {...other}
            ref="_rootComponent"
            popupVisible={popupVisible}
            setPopupVisible={this.setPopupVisible} />
        </div>
      );
    }
  }

export default renderPopupComponent;
