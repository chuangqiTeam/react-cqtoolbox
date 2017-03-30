import React, {PropTypes, Component} from 'react';

class TableTh extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({th: PropTypes.string})
  }

  render() {
    const {theme, children} = this.props;
    return (
      <th className={theme.th}>
        {children}
      </th>
    );
  }
}

export default TableTh;
