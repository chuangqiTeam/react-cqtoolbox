import React, {PropTypes, Component} from 'react';

class TableTh extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({th: PropTypes.string})
  }

  render() {
    const {theme, children, className, ...other} = this.props;
    return (
      <th {...other}  className={`${className} ${theme.th}`}>
        {children}
      </th>
    );
  }
}

export default TableTh;
