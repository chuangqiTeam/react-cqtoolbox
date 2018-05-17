import React, {Component} from 'react';
import PropTypes from 'prop-types';
import pureRender from '../decorator/pureRender';

class TableBody extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {children} = this.props;
    return (
      <tbody>
        {children}
      </tbody>
    );
  }
}

export default pureRender(TableBody);
