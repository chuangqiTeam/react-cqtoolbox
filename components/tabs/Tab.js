import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const factory = () => {
  class Tab extends Component {
    static propTypes = {
      active: PropTypes.bool,
      activeClassName: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      hidden: PropTypes.bool,
      index: PropTypes.number,
      label: PropTypes.node,
      onActive: PropTypes.func,
      onClick: PropTypes.func,
      theme: PropTypes.shape({
        active: PropTypes.string,
        disabled: PropTypes.string,
        hidden: PropTypes.string,
        label: PropTypes.string,
        rippleWrapper: PropTypes.string,
      }),
    }

    static defaultProps = {
      active: false,
      disabled: false,
      hidden: false,
    }

    componentDidUpdate(prevProps) {
      if (!prevProps.active && this.props.active && this.props.onActive) {
        this.props.onActive();
      }
    }

    handleClick = (event) => {
      if (!this.props.disabled && this.props.onClick) {
        this.props.onClick(event, this.props.index);
      }
    }

    render() {
      const {
        active,
        activeClassName,
        children,
        className,
        disabled,
        hidden,
        label,
        theme,
        index, // eslint-disable-line
        onActive, // eslint-disable-line
        ...other,
      } = this.props;

      const classes = classnames(theme.label, {
        [theme.active]: active,
        [theme.hidden]: hidden,
        [theme.disabled]: disabled,
        [activeClassName]: active,
      }, className);

      return (
        <div
          {...other}
          data-react-toolbox="tab"
          className={classes}
          onClick={this.handleClick}>
          {label}
          {children}
        </div>
      );
    }
  }

  return Tab;
}

export {factory as tabFactory};
