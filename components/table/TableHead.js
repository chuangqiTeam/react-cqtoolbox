import React, {PropTypes, Component} from 'react';
import pureRender from '../decorator/pureRender';

class TableHead extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {children} = this.props;
    return (
      <thead>
        {children}
      </thead>
    );
  }
}

export default pureRender(TableHead);
