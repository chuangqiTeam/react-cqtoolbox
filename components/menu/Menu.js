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
      ...other,
    } = this.props;

    return (
      <ul
        data-react-toolbox="menu"
        {...other}
        className={theme.menu}>
        {children}
      </ul>
    );
  }
}

export default Menu;
