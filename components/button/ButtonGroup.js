// @flow

import React from 'react';
import classnames from 'classnames';

type Component = Class<React.Component<{}, {}, mixed>>;

type Theme = {
  buttonGroup: string,
}

type DefaultProps =  {
  size: string;
}

type  Props = {
  children: Array<React.Element<*>>,
  size: 'small' | 'normal' | 'large',
  theme: Theme,
}

const factory = (Button: Component) => {

  const isButton = (child: React.Element<*>): boolean => child.type === Button;

  class ButtonGroup extends React.Component<DefaultProps, Props, *> {

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

      const classes = classnames(theme.buttonGroup);

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
