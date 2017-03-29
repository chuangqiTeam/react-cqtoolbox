import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

const factory = (Button) => {

  const isButton = child => child.type === Button;

  class ButtonGroup extends Component {
    static propTypes = {
      children: PropTypes.node,
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      theme: PropTypes.shape({
        buttonGroup: PropTypes.string,
      }),
    }

    static defaultProps = {
      size: 'normal',
    }

    renderChildren = (children) => {
      const {size, theme} = this.props;

      return React.Children.map(this.props.children, (item, index) =>
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
