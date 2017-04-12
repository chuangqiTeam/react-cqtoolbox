// flow

import React, { Component } from 'react';
import classnames from 'classnames';

type Theme = {
  buttonGroup: string,
}

type DefaultProps =  {
  size: string;
}

type  Props = {
  children: React.Element<*>,
  size: 'small' | 'normal' | 'large',
  theme: Theme,
}

const factory = (Button: React.Class<*>) => {

  const isButton = (child: React.Element<*>): boolean => child.type === Button;

  class ButtonGroup extends Component<DefaultProps, Props, State> {

    static defaultProps = {
      size: 'normal',
    }

    renderChildren = (children: Array<React.Element<*>>) => {
      const {size, theme} = this.props;

      return React.Children.map(this.props.children, (item: React.Element<*>, index: number) =>
        isButton(item) && React.cloneElement(item, {
          key: index,
          theme: theme,
          size: size,
        }));
    }

    render () {
      const {
        theme,
        children,
      } = this.props;

      const classes: object = classnames(theme.buttonGroup);

      return (
        <div className={classes}>
          {this.renderChildren(children)}
        </div>
      );
    }
  }

  return ButtonGroup;
}

export {factory as buttonGroupFactory};
