import 'normalize.css';
import './style/style.css';

import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Dialog from './components/dialog';
import Input from './components/input';
import AutoComplete from './components/autocomplete';
import Tooltip from './components/tooltip';
import Sider from './components/sider';
import {Layout, Header, Content} from '../components/layout';


class Root extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <h1 className="title">CQ前端组件库</h1>
        </Header>
        <Layout hasSider>
          <Sider />
          <Content>
            <div className="app">
              <Button />
              <FontIcon />
              <Select />
              <Dialog />
              <Input />
              <AutoComplete />
              <Tooltip />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Root;
