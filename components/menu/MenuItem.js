import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from '../font_icon';

const factory = (ripple) => {
  class MenuItem extends Component {
    static propTypes = {
      value: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      selected: PropTypes.bool,
      theme: PropTypes.shape({
        caption: PropTypes.string,
        disabled: PropTypes.string,
        icon: PropTypes.string,
        menuItem: PropTypes.string,
        selected: PropTypes.string,
      }),
    };

    static defaultProps = {
      className: '',
      disabled: false,
      selected: false,
    };

    handleClick = (event) => {
      if (this.props.onClick && !this.props.disabled) {
        this.props.onClick(event, this);
      }
    };

    render() {
      const {
        value,
        children,
        disabled,
        icon,
        selected,
        theme,
        ...others
      } = this.props;
      const className = classnames(theme.menuItem, {
        [theme.selected]: selected,
        [theme.disabled]: disabled,
      }, this.props.className);

      return (
        <li
          {...others}
          data-react-toolbox="menu-item"
          className={className}
          onClick={this.handleClick}>
          <FontIcon value={icon} className={theme.icon} />
          <span className={theme.caption}>{value || children}</span>
        </li>
      );
    }
  }

  return ripple(MenuItem);
};

export { factory as menuItemFactory };
