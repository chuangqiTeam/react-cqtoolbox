import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class TableTd extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool,
    theme: PropTypes.shape({
      td: PropTypes.string,
      active: PropTypes.string,
    })
  }

  static defaultProps = {
    active: false,
  }

  render() {
    const {
      theme,
      active,
      children,
      className,
      ...other,
    } = this.props;

    const classes = classnames(theme.td, {
      [theme.active]: active,
    }, className);

    return (
      <td className={classes} {...other}>
        {children}
      </td>
    );
  }
}

export default TableTd;
