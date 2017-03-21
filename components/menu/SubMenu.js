import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Animate from 'rc-animate';
import animationFactory from './animationFactory.js';

const factory = (SubMenuCaption) => {
  class SubMenu extends Component {
    static propTypes = {
      title: PropTypes.string,
      mode: PropTypes.oneOf(['inline', 'vertical']),
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
      mode: 'inline',
      className: '',
      open: false,
    };

    state = {
      open: this.props.open,
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.mode !== this.props.mode) {
        this.setState({ open: false });
      }
    }

    isInlineMode = () => {
      return this.props.mode === 'inline';
    }

    clearSubMenuLeaveTimer() {
      if (this.subMenuLeaveTimer) {
        clearTimeout(this.subMenuLeaveTimer);
        this.subMenuLeaveTimer = null;
      }
    }

    handleClick = (event) => {
      if (this.isInlineMode()) {
        const open = !this.state.open;
        this.setState({ open });
      }

      if (this.props.onTitleClick) {
        this.props.onTitleClick(event, this);
      }
    }

    handleMouseEnter = (event) => {
      if (!this.isInlineMode()) {
        this.clearSubMenuLeaveTimer();
        this.setState({ open: true });
      }
    }

    handleMouseLeave = (event) => {
      if (!this.isInlineMode()) {
        this.subMenuLeaveTimer = setTimeout(() => {
          this.setState({ open: false });
          this.clearSubMenuLeaveTimer();
        }, 100);
      }
    }

    render() {
      const {
        title,
        children,
        icon,
        mode,
        theme,
        className,
        ...others
      } = this.props;

      const state = this.state;

      const classes = classnames(className, theme.submenu, theme[mode]);

      const animProps = {};

      if (mode === 'vertical') {
        animProps.transitionName = {
            enter: theme.verticalAnimEnter,
            leave: theme.verticalAnimLeave,
            enterActive: theme.verticalAnimEnterActive,
            leaveActive: theme.verticalAnimLeaveActive,
          };
      } else {
        animProps.animation = this.props.animation || animationFactory(theme['inlineAnim']);
      }

      return (
        <li
          {...others}
          data-react-toolbox="submenu"
          className={classes}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <SubMenuCaption
            theme={theme}
            title={title}
            mode={mode}
            icon={icon}
            open={state.open}
            onClick={this.handleClick} />
          <Animate
            exclusive
            component=""
            {...animProps}>
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
