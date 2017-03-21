import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from '../font_icon';

const factory = (ripple) => {
  class SubMenuCaption extends Component {
    static propTypes = {
      title: PropTypes.string,
      mode: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
      open: PropTypes.bool,
      children: PropTypes.node,
      theme: PropTypes.shape({
        caption: PropTypes.string,
        icon: PropTypes.string,
        menuItem: PropTypes.string,
        arrow: PropTypes.string,
        open: PropTypes.string,
      }),
    };

    static defaultProps = {
      className: '',
      open: false,
      onClick: () => void 0,
    };

    render() {
      const {
        title,
        icon,
        mode,
        open,
        theme,
        children,
        ...others
      } = this.props;

      const classes = classnames(theme.subMenuItem, {
      }, this.props.className);

      const arrowClasses = classnames({
        [theme.open]: open,
      }, theme.arrow);

      return (
        <div
          {...others}
          className={classes}>
          {icon ? <FontIcon value={icon} className={theme.icon} /> : null}
          <span className={theme.caption}>{title}</span>
          {mode === 'inline' && <FontIcon className={arrowClasses} value="down" />}
          {children}
        </div>
      );
    }
  }

  return ripple(SubMenuCaption);
};

export { factory as subMenuCaptionFactory };
