import React, { PropTypes, Component } from 'react';
import pureRender from '../decorator/pureRender.js';
import classnames from 'classnames';

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    mode: PropTypes.oneOf(['inline', 'vertical', 'horizontal']),
    theme: PropTypes.object,
  }

  renderMenuItem = (child, index) => {
    if (!child) {
      return null;
    }

    const newChildProps = {
      mode: this.props.mode,
    };

    return React.cloneElement(child, newChildProps);
  }

  render () {
    const {
      className,
      children,
      theme,
      mode,
      ...other,
    } = this.props;

    const classes = classnames(theme.menu, theme[mode], className);

    return (
      <ul
        data-react-toolbox="menu"
        {...other}
        className={classes}>
        {React.Children.map(children, this.renderMenuItem)}
      </ul>
    );
  }
}

export default pureRender(Menu);
