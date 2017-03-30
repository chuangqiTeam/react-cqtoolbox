import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class TableTr extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool,
    theme: PropTypes.shape({
      tr: PropTypes.string,
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
      className
    } = this.props;

    const classes = classnames(theme.tr, {
      [theme.active]: active,
    }, className);

    return (
      <tr className={classes}>
        {children}
      </tr>
    );
  }
}

export default TableTr;
