import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {FontIcon} from '../font_icon';

const factory = (ripple) => {
  class SubMenuCaption extends Component {
    static propTypes = {
      icon: PropTypes.string,
      title: PropTypes.string,
      mode: PropTypes.oneOf(['inline', 'vertical', 'horizontal']),
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

      let arrowElement;
      if (mode === 'horizontal') {
        arrowElement = <FontIcon className={arrowClasses} value="caret-down" />;
      } else if (mode === 'vertical') {
        arrowElement = <FontIcon className={arrowClasses} value="right" />;
      } else {
        arrowElement = <FontIcon className={arrowClasses} value="down" />;
      }

      return (
        <div
          {...others}
          className={classes}>
          {icon ? <FontIcon value={icon} className={theme.icon} /> : null}
          <span className={theme.caption}>{title}</span>
          {arrowElement}
          {children}
        </div>
      );
    }
  }

  return ripple(SubMenuCaption);
};

export { factory as subMenuCaptionFactory };
