import React, { PropTypes } from 'react';
import Animate from 'rc-animate';
import animationFactory from '../utils/animationHeightFactory.js';
import classnames from 'classnames';

const iconTypes = {
  success: 'check-circle',
  info: 'info-circle',
  error: 'cross-circle',
  warning: 'exclamation-circle',
};

const factory = (FontIcon) => {
  class Alert extends React.Component {
    static propTypes = {
      type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
      message: PropTypes.node,
      description: PropTypes.node,
      className: PropTypes.string,
      showIcon: PropTypes.bool,
      closable: PropTypes.bool,
      theme: PropTypes.object,
    }

    static defaultProps = {
      type: 'success',
      showIcon: true,
      closable: true,
    }

    state = {
      closed: false,
    }

    handleClose = () => {
      this.setState({closed: true});
    }

    render () {
      const {
        type,
        message,
        description,
        className,
        showIcon,
        closable,
        theme,
        ...other,
      } = this.props;

      const {
        closed,
      } = this.state;

      const classes = classnames(theme.alert, theme[type], {
        [theme.hasDscription]: !!description,
        [theme.noIcon]: !showIcon,
      }, className);

      const closeIcon = closable && (
        <a onClick={this.handleClose} className={theme.closeIcon}>
          <FontIcon value="cross" />
        </a>
      );

      return (
        <Animate
          exclusive
          component=""
          animation={animationFactory(theme.anim)}>
          {!closed ?
          <div
            data-react-toolbox="alert"
            className={classes}
            {...other}>
            <div className={theme.alertInner}>
              {showIcon && <FontIcon theme={theme} value={iconTypes[type]} />}
              <span className={theme.message}>{message}</span>
              <span className={theme.description}>{description}</span>
              {closeIcon}
            </div>
          </div> : null}
        </Animate>
      );
    }
  }

  return Alert;
}



export {factory as alertFactory};
