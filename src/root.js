import 'normalize.css';
import './style/style.css';
import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Menu from './components/menu';
import Dialog from './components/dialog';
import Input from './components/input';
import AutoComplete from './components/autocomplete';
import Tooltip from './components/tooltip';
import {Layout, Header, Sider, Content} from '../components/layout';

class Root extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Layout>
            <Content>
              <div className="app">
                <Button />
                <FontIcon />
                <Select />
                <Menu />
                <Dialog />
                <Input />
                <AutoComplete />
                <Tooltip />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Root;
