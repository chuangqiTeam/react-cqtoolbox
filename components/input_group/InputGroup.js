import React from 'react';
import PropTypes from 'prop-types';
import anyPass from 'ramda/src/anyPass';
import classnames from 'classnames';

const factory = (Select, Input, Button) => {

  const isSelect = child => child.type === Select;
  const isInput = child => child.type === Input;
  const isButton = child => child.type === Button;

  class InputGroup extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      className: PropTypes.string,
      theme: PropTypes.shape({
        inputGroup: PropTypes.string,
        input: PropTypes.string,
        select_input: PropTypes.string,
        small: PropTypes.string,
        normal: PropTypes.string,
        large: PropTypes.string,
      }),
    }

    static defaultProps = {
      size: 'normal',
    }

    renderChildren = (children) => {
      return React.Children.map(this.props.children, (item, index) =>
        anyPass([isInput, isSelect, isButton])(item) && React.cloneElement(item, {
          key: index,
          theme: this.props.theme,
        }));
    }

    render () {
      const {
        size,
        theme,
        className,
        children,
      } = this.props;

      const classes = classnames(theme.inputGroup, theme[size], className);

      return (
        <div className={classes}>
          {this.renderChildren(children)}
        </div>
      );
    }
  }

  return InputGroup;
}

export {factory as inputGroupFactory};
