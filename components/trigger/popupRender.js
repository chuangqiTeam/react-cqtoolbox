import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

const defaults = {
  delay: 500,
};

const popupRenderFactory = (options = {}) => {
  const {
    delay: defaultDelay,
  } = { ...defaults, ...options };

  return (WrappedComponent) =>
    class PopupElement extends Component {

      static propTypes = {
        popupVisible: PropTypes.bool.isRequired,
        delay: PropTypes.number,
      };

      static defaultProps = {
        delay: defaultDelay,
      }

      state = {
        popupVisible: this.props.popupVisible,
        rendered: this.props.popupVisible,
      };

      componentDidMount() {
        this._renderOverlay();
      }

      componentWillReceiveProps(nextProps) {
        if (this._overlayTarget && nextProps.container !== this.props.container) {
          this._portalContainerNode.removeChild(this._overlayTarget);
          this._portalContainerNode = getContainer(nextProps.container);
          this._portalContainerNode.appendChild(this._overlayTarget);
        }

        if (nextProps.popupVisible && !this.props.popupVisible) this.renderAndActivate();
        if (!nextProps.popupVisible && this.props.popupVisible) this.deactivateAndUnrender();
      }

      componentDidUpdate() {
        this._renderOverlay();
      }

      componentWillUnmount() {
        this._unrenderOverlay();
        this._unmountOverlayTarget();
        clearTimeout(this.activateTimeout);
        clearTimeout(this.unrenderTimeout);
      }

      renderAndActivate() {
        if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
        this.setState({ rendered: true, popupVisible: false }, () => {
          this.activateTimeout = setTimeout(() => this.setState({ popupVisible: true }), 20);
        });
      }

      deactivateAndUnrender() {
        this.setState({ rendered: true, popupVisible: false }, () => {
          this.unrenderTimeout = setTimeout(() => {
            this.setState({ rendered: false });
            this.unrenderTimeout = null;
          }, this.props.delay);
        });
      }

      _getOverlay() {
        const {popupVisible} = this.state;

        return React.cloneElement(
          this.trggerElement.getPopupElement(),
          {active: popupVisible}
        );
      }

      _renderOverlay() {
        const { rendered } = this.state;

        if (rendered) {
          const overlay = this._getOverlay();
          this._mountOverlayTarget();
          this._overlayInstance = ReactDOM.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
        } else {
          this._unrenderOverlay();
          this._unmountOverlayTarget();
        }
      }

      _unrenderOverlay() {
        if (this._overlayTarget) {
          ReactDOM.unmountComponentAtNode(this._overlayTarget);
          this._overlayInstance = null;
        }
      }

      _mountOverlayTarget() {
        if (!this._overlayTarget) {
          this._overlayTarget = document.createElement('div');
          this._portalContainerNode = getContainer(this.props.container);
          this._portalContainerNode.appendChild(this._overlayTarget);
        }
      }

      _unmountOverlayTarget() {
        if (this._overlayTarget) {
          this._portalContainerNode.removeChild(this._overlayTarget);
          this._overlayTarget = null;
        }
        this._portalContainerNode = null;
      }

      render() {
        const {
          delay, // eslint-disable-line
          ...other,
        } = this.props;

        return <WrappedComponent
          ref={trigger => this.trggerElement = trigger}
          {...other} />;
      }
    }
  }

function getContainer(container) {
  const _container = typeof container === 'function'
    ? container()
    : container;
  return ReactDOM.findDOMNode(_container) || document.body;
}

export default popupRenderFactory;
