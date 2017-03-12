import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {transition} from 'cqaso-kit-transition';

const factory = (SubMenuCaption) => {
  class SubMenu extends Component {
    static propTypes = {
      title: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      onTitleClick: PropTypes.func,
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

    componentDidMount() {
      this._menuHeight = this.menu.offsetHeight;
      this.toggleMenu(this.state.open)
    }

    collapseMenu = () => {
      transition(this.menu)
      .to({ height: 0, opacity: 0 });
    }

    expandMenu = () => {
      transition(this.menu)
      .to({ height: this._menuHeight + 'px', opacity: 1 });
    }

    toggleMenu = (open) => {
      open ? this.expandMenu() : this.collapseMenu();
    }

    handleClick = (event) => {
      const open = !this.state.open;

      this.setState({ open }, () => this.toggleMenu(open));

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
          <ul
            ref={menu => this.menu = menu}
            className={theme.menu}>
            {children}
          </ul>
        </li>

      );
    }
  }

  return SubMenu;
};

export { factory as subMenuFactory };
