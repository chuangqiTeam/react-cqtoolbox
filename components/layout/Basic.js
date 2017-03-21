import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

const factory = (name) => {
  class Basic extends Component  {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      theme: PropTypes.shape({
        layout: PropTypes.string,
        header: PropTypes.string,
        hasSider: PropTypes.string,
        content: PropTypes.string,
        footer: PropTypes.string,
      }),
    }

    static defaultProps = {
      hasSider: false,
    }

    render() {
      const {
        theme,
        children,
        className,
        hasSider,
        ...others,
      } = this.props;

      const classes = classNames(theme[name], className, {
        [theme.hasSider]: hasSider,
      });

      return (
        <div className={classes} {...others}>{children}</div>
      );
    }
  }

  return Basic;
}


export {factory as basicFactory};
