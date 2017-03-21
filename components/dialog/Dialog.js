import React, { PropTypes, Component } from 'react';
import activableRenderer from '../decorator/activableRenderer.js';
import classnames from 'classnames';

const factory = (Overlay, Portal, Button) => {
  class Dialog extends Component {
    static propTypes = {
      actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
      })),
      title: PropTypes.node,
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      theme: PropTypes.shape({
        active: PropTypes.string,
        body: PropTypes.string,
        button: PropTypes.string,
        dialog: PropTypes.string,
        navigation: PropTypes.string,
        overlay: PropTypes.string,
        title: PropTypes.string,
        wrapper: PropTypes.string,
      }),
      type: PropTypes.oneOf(['small', 'normal', 'large', 'fullscreen']),
    }

    static defaultProps = {
      actions: [],
      active: false,
      type: 'normal',
    }

    render () {
      const {
        active,
        children,
        theme,
        title,
        type,
        onOverlayClick,
        onEscKeyDown,
      } = this.props;

      const actions = this.props.actions.map((action, idx) => {
        const className = classnames(theme.button, { [action.className]: action.className });
        return <Button key={idx} {...action} className={className} />; // eslint-disable-line
      });

      const className = classnames([theme.dialog, theme[type]], {
        [theme.active]: active,
      }, this.props.className);

      return (
         <Portal className={theme.wrapper}>
          <Overlay
            active={active}
            className={theme.overlay}
            onClick={onOverlayClick}
            onEscKeyDown={onEscKeyDown} />
            <div data-react-toolbox="dialog" className={className}>
              <section className={theme.body}>
                {title ? <h6 className={theme.title}>{title}</h6> : null}
                {children}
              </section>
              {actions.length
                ? <nav role="navigation" className={theme.navigation}>
                  {actions}
                </nav>
                : null}
            </div>
        </Portal>
      );
    }
  }

  return activableRenderer()(Dialog);
}


export {factory as dialogFactory};
