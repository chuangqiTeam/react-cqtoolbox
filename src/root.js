import 'normalize.css';
import './style/style.css';
import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Menu from './components/menu';

class Root extends Component {
  render() {
    return (
      <div className="app">
        <Button />
        <FontIcon />
        <Select />
        <Menu />
      </div>
    );
  }
}

export default Root;
