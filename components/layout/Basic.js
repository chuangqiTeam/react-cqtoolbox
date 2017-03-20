import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

const factory = (name) => {
  class Basic extends Component  {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      name: PropTypes.string,
      theme: PropTypes.shape({
        layout: PropTypes.string,
        header: PropTypes.string,
        sider: PropTypes.string,
        hasSider: PropTypes.string,
        content: PropTypes.string,
        footer: PropTypes.string,
      }),
    }

    static defaultProps = {
      name: name,
    }

    render() {
      const {
        theme,
        children,
        className,
        ...others,
      } = this.props;

      let hasSider;

      React.Children.forEach(children, (element) => {
        if (element && element.props && element.props.name === 'sider') {
          hasSider = true;
        }
      });

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
