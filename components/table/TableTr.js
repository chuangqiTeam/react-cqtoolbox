import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TableTr extends Component {

  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    hoverable: PropTypes.bool,
    theme: PropTypes.shape({
      tr: PropTypes.string,
      active: PropTypes.string,
    })
  }

  static defaultProps = {
    active: false,
    hoverable: false,
  }

  render() {
    const {
      theme,
      active,
      hoverable,
      children,
    } = this.props;

    const classes = classnames(theme.tr, {
      [theme.active]: active,
      [theme.withHover]: hoverable,
    });

    return (
      <tr className={classes}>
        {children}
      </tr>
    );
  }
}

export default TableTr;
