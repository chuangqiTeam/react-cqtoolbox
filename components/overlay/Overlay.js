import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class Overlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    lockScroll: PropTypes.bool,
    onEscKeyDown: PropTypes.func,
    theme: PropTypes.shape({
      active: PropTypes.string,
      overlay: PropTypes.string,
    }),
  }

  static defaultProps = {
    lockScroll: true,
  }

  componentDidMount() {
    const { active, lockScroll, onEscKeyDown } = this.props;
    if (onEscKeyDown) {
      this.keydownHandler = true;
      this.addBodyKeydownListener(onEscKeyDown);
    }
    if (active && lockScroll) this.addLockScroll(active, lockScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { active, lockScroll, onEscKeyDown } = this.props;


    if (active && !prevProps.active && lockScroll) {
      this.addLockScroll(active, lockScroll);
    } else {
      if (!document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
        this.removeLockScroll(active, lockScroll);
      }
    }

    if (active && !prevProps.active && onEscKeyDown && !this.keydownHandler) {
      this.addBodyKeydownListener(onEscKeyDown);
    }
  }

  componentWillUnmount() {
    if (this.props.active && this.props.lockScroll) {
      if (!document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
        this.removeLockScroll();
      }
    }

    if (this.props.onEscKeyDown) {
      this.removeBodyKeydownListener();
    }
  }

  addBodyKeydownListener = () => {
    document.body.addEventListener('keydown', this.handleEscKey);
  }

  removeBodyKeydownListener = () => {
    document.body.removeEventListener('keydown', this.handleEscKey);
  }

  addLockScroll = () => {
    document.body.style.overflow = 'hidden';
  }

  removeLockScroll = () => {
    document.body.style.overflow = '';
  }

  handleEscKey = (e) => {
    if (this.props.active &&
      this.props.onEscKeyDown &&
      e.which === 27) {
      this.props.onEscKeyDown(e);
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render() {
    const {
      active,
      className,
      lockScroll, // eslint-disable-line
      onEscKeyDown, // eslint-disable-line
      theme,
      ...other,
    } = this.props;

    return (
      <div
        {...other}
        data-react-toolbox="overlay"
        onClick={this.handleClick}
        className={classnames(theme.overlay, {
          [theme.active]: active,
        }, className)}
      />
    );
  }

}

export default Overlay;
