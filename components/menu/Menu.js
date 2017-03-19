import React, { PropTypes, Component } from 'react';
import pureRender from '../decorator/pureRender.js';

@pureRender
class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render () {
    const {
      children,
      theme,
    } = this.props;

    return (
      <ul className={theme.menu}>
        {children}
      </ul>
    );
  }
}

export default Menu;
