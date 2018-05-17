import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TableTd extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
      td: PropTypes.string,
    })
  }

  render() {
    const {
      theme,
      children,
      className,
      ...other,
    } = this.props;

    const classes = classnames(theme.td, className);

    return (
      <td className={classes} {...other}>
        {children}
      </td>
    );
  }
}

export default TableTd;
