import 'normalize.css';
import './style/style.css';
import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Menu from './components/menu';
import Dialog from './components/dialog';

class Root extends Component {
  render() {
    return (
      <div className="app">
        <Button />
        <FontIcon />
        <Select />
        <Menu />
        <Dialog />
      </div>
    );
  }
}

export default Root;
