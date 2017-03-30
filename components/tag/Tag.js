import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Animate from 'rc-animate';

const factory = (FontIcon) => {
  class Tag extends Component {
    static propTypes = {
      color: PropTypes.string,
      raised: PropTypes.bool,
      closable: PropTypes.bool,
      onClose: PropTypes.func,
      label: PropTypes.node,
      children: PropTypes.node,
      className: PropTypes.string,
      theme: PropTypes.shape({
        tag: PropTypes.string,
        neutral: PropTypes.string,
        raised: PropTypes.string,
        close: PropTypes.string,
        zoomAnim: PropTypes.string,
      }),
    }

    static defaultProps = {
      closable: false,
      raised: false,
    }

    state = {
      closed: false,
    }

    handleCloseClick = (e) => {
      this.setState({ closed: true });
      if (this.props.onClose) {
        this.props.onClose(e);
      }
    }

    render() {
      const {
        label,
        children,
        color,
        raised,
        closable,
        onClose, // eslint-disable-line
        className,
        theme,
        style,
        ...other,
      } = this.props;

      const {
        closed,
      } = this.state;

      const closeIcon = closable && (
        <FontIcon
          className={theme.close}
          onClick={this.handleCloseClick}
          value="close-circle" />
      );

      const styles = Object.assign(raised ?
        {backgroundColor: color} :
        {color: color}, style);

      const classes = classnames(theme.tag, {
        [theme.raised]: raised,
        [theme.neutral]: !raised,
      }, className);

      const tag = closed ? null : (
        <div
          data-react-toolbox="tag"
          {...other}
          className={classes}
          style={styles}>
            <span>{label || children}</span>
            {closeIcon}
        </div>
      );

      return (
        <Animate
          component=""
          transitionName={{leave: theme.animLeave}}
          onEnd={this.animationEnd}>
          {tag}
        </Animate>
    );
    }
  }

  return Tag;
}

export {factory as tagFactory};
