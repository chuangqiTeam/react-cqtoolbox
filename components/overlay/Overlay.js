// @flow

import React, {Component} from 'react';
import classnames from 'classnames';

type Theme = {
  active: string,
  overlay: string,
};

type DefaultProps = { lockScroll: boolean };

type Props = {
  active: boolean,
  children: React.Element<any>,
  className: string,
  onClick: () => void,
  lockScroll: boolean,
  onEscKeyDown: () => void,
  theme: Theme,
};

type State = any;

class Overlay extends Component<DefaultProps, Props, State> {

  static defaultProps = {
    lockScroll: true,
  };

  keydownHandler: bool;

  componentDidMount() {
    const { active, lockScroll, onEscKeyDown } = this.props;
    if (onEscKeyDown) {
      this.keydownHandler = true;
      this.addBodyKeydownListener();
    }
    if (active && lockScroll) this.addLockScroll(active, lockScroll);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
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
    if (document.body) {
      document.body.addEventListener('keydown', this.handleEscKey);
    }
  }

  removeBodyKeydownListener = () => {
    if (document.body) {
      document.body.removeEventListener('keydown', this.handleEscKey);
    }
  }

  addLockScroll = () => {
    if (document.body) {
      document.body.style.overflow = 'hidden';
    }
  }

  removeLockScroll = () => {
    if (document.body) {
      document.body.style.overflow = '';
    }
  }

  handleEscKey = (e: Event) => {
    if (this.props.active &&
      this.props.onEscKeyDown &&
      e.which === 27) {
      this.props.onEscKeyDown(e);
    }
  }

  handleClick = (event: MouseEvent) => {
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
