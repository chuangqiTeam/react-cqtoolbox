// flow

import React, { Component } from 'react';
import classnames from 'classnames';
import rippleFactory from '../ripple/Ripple';
import FontIcon from '../font_icon';

type Theme = {
  accent: string,
  button: string,
  flat: string,
  floating: string,
  icon: string,
  mini: string,
  neutral: string,
  primary: string,
  raised: string,
  rippleWrapper: string,
  toggle: string,
};

type DefaultProps = {
  accent: boolean,
  className: string,
  flat: boolean,
  floating: boolean,
  mini: boolean,
  neutral: boolean,
  primary: boolean,
  raised: boolean,
  size: string,
  type: string,
};

type Props = {
  accent: boolean,
  children: React.Element<*>,
  className: string,
  disabled: boolean,
  flat: boolean,
  floating: boolean,
  fullWidth: boolean,
  href: string,
  size: 'small' | 'normal' | 'large',
  icon: string | React.Element<*>,
  iconSpin: boolean,
  label: React.Element<*>,
  mini: boolean,
  neutral: boolean,
  onMouseLeave: () => void,
  onMouseUp: () => void,
  primary: boolean,
  raised: boolean,
  theme: Theme,
  type: string,
};

type State = empty;


const factory = (ripple, FontIcon) => {
  class Button extends Component<DefaultProps, Props, State> {

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

    buttonNode: HTMLButtonElement;

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
        fullWidth,
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
        [theme.fullWidth]: fullWidth,
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

const Button = factory(rippleFactory({ centered: false }), FontIcon);

export {Button};
export {factory as buttonFactory};
