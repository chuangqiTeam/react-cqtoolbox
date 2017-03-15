import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import domAlign from 'dom-align';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Overlay from '../overlay';

class Popup extends React.Component {

  static propTypes = {
    align: PropTypes.object,
    mask: PropTypes.bool,
    theme: PropTypes.object,
    getRootDomNode: PropTypes.func,
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
    const {theme, mask} = this.props;

    return mask ?
    <Overlay
      active={true}
      className={theme.overlay} /> : null;
  }

  getPopupElement = () => {
    const {children, theme} = this.props;
    const newProps = {
      ...children.props,
      key: 'popup',
      ref: 'popup',
    };

    const popupTheme = {
      appear: theme['popup-appear'],
      appearActive: theme['popup-appear-active'],
    };

    return (
      <ReactCSSTransitionGroup
        transitionName={popupTheme}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          {React.cloneElement(children, newProps)}
      </ReactCSSTransitionGroup>
    );
  }

  getPopupDomNode = () => {
    return findDOMNode(this.refs.popup);
  }

  render () {
    return (
      <div>
        {this.getMaskElement()}
        {this.getPopupElement()}
      </div>
    )
  }
}

export default Popup;
