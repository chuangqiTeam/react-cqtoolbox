import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
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
      popupTheme: PropTypes.object,
      popupAlign: PropTypes.object,
      popupVisible: PropTypes.bool,
      matchTargetWidth: PropTypes.bool,
      onPopupVisibleChange: PropTypes.func,
    }

    static defaultProps = {
      action: ['click'],
      mask: false,
      popupTheme: {},
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

    componentWillReceiveProps(nextProps) {
      if ('popupVisible' in nextProps &&
        this.props.popupVisible !== nextProps.popupVisible) {
        this.setState({ popupVisible: nextProps.popupVisible });
      }
    }

    getRootDomNode = () => {
      return findDOMNode(this.refs._rootComponent);
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
        popupTheme,
        matchTargetWidth,
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
            theme={popupTheme}
            mask={mask}
            align={popupAlign}
            matchTargetWidth={matchTargetWidth}
            getRootDomNode={this.getRootDomNode}
            onRequestClose={this.setPopupVisible}>
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
