import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Animate from 'rc-animate';
import animationFactory from './animationFactory.js';

const factory = (SubMenuCaption) => {
  class SubMenu extends Component {
    static propTypes = {
      title: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      onTitleClick: PropTypes.func,
      animation: PropTypes.object,
      open: PropTypes.bool,
      theme: PropTypes.shape({
        caption: PropTypes.string,
        icon: PropTypes.string,
        menuItem: PropTypes.string,
      }),
    };

    static defaultProps = {
      className: '',
      open: false,
    };

    state = {
      open: this.props.open,
    }


    handleClick = (event) => {
      const open = !this.state.open;

      this.setState({ open });

      if (this.props.onTitleClick) {
        this.props.onTitleClick(event, this);
      }
    };

    render() {
      const {
        title,
        children,
        icon,
        theme,
        className,
        ...others
      } = this.props;

      const state = this.state;

      const classes = classnames(className, theme.submenu);

      return (
        <li
          {...others}
          data-react-toolbox="submenu"
          className={classes}>
          <SubMenuCaption
            title={title}
            icon={icon}
            open={state.open}
            onClick={this.handleClick} />
          <Animate
            exclusive
            component=""
            animation={this.props.animation || animationFactory(theme['submenu-anim'])}>
            {state.open ?
              <ul
                className={theme.menu}>
                {children}
              </ul> : null}
          </Animate>
        </li>

      );
    }
  }

  return SubMenu;
};

export { factory as subMenuFactory };
