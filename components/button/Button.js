import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const factory = (ripple, FontIcon) => {
  class Button extends Component {
    static propTypes = {
      accent: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      flat: PropTypes.bool,
      floating: PropTypes.bool,
      href: PropTypes.string,
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      iconSpin: PropTypes.bool,
      label: PropTypes.string,
      mini: PropTypes.bool,
      neutral: PropTypes.bool,
      onMouseLeave: PropTypes.func,
      onMouseUp: PropTypes.func,
      primary: PropTypes.bool,
      raised: PropTypes.bool,
      theme: PropTypes.shape({
        accent: PropTypes.string,
        button: PropTypes.string,
        flat: PropTypes.string,
        floating: PropTypes.string,
        icon: PropTypes.string,
        mini: PropTypes.string,
        neutral: PropTypes.string,
        primary: PropTypes.string,
        raised: PropTypes.string,
        rippleWrapper: PropTypes.string,
        toggle: PropTypes.string,
      }),
      type: PropTypes.string,
    }

    static defaultProps = {
      accent: false,
      className: '',
      flat: false,
      floating: false,
      mini: false,
      neutral: true,
      primary: false,
      raised: false,
      size: 'normal',
      type: 'button',
    }

    getLevel = () => {
      if (this.props.primary) return 'primary';
      if (this.props.accent) return 'accent';
      return 'neutral';
    }

    getShape = () => {
      if (this.props.raised) return 'raised';
      if (this.props.floating) return 'floating';
      return 'flat';
    }

    handleMouseUp = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    render() {
      const {
        accent,    // eslint-disable-line
        children,
        className,
        flat,      // eslint-disable-line
        floating,  // eslint-disable-line
        href,
        icon,
        label,
        mini,
        neutral,
        iconSpin,
        primary,   // eslint-disable-line
        raised,    // eslint-disable-line
        theme,
        type,
        size,
        ...others
      } = this.props;
      const element = href ? 'a' : 'button';
      const level = this.getLevel();
      const shape = this.getShape();

      const classes = classnames(theme.button, [theme[shape]], [theme[size]], {
        [theme[level]]: neutral,
        [theme.mini]: mini,
      }, className);

      const props = {
        ...others,
        href,
        ref: (node) => { this.buttonNode = node; },
        className: classes,
        disabled: this.props.disabled,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        type: !href ? type : null,
        'data-react-toolbox': 'button',
      };

      return React.createElement(element, props,
        icon ? <FontIcon spin={iconSpin} className={theme.icon} value={icon} /> : null,
        label,
        children,
      );
    }
  }

  return ripple(Button);
};

export {factory as buttonFactory};
