import 'normalize.css';
import './style/style.css';

import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Dialog from './components/dialog';
import Input from './components/input';
import Form from './components/form';
import AutoComplete from './components/autocomplete';
import Tooltip from './components/tooltip';
import Badge from './components/badge';
import Header from './components/header';
import Sider from './components/sider';
import Datepicker from './components/datepicker';
import LazyImage from './components/lazyImage';
import Alert from './components/alert';
import {Layout, Content} from '../components/layout';


class Root extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout hasSider>
          <Sider />
          <Content>
            <div className="app">
              <Button />
              <FontIcon />
              <Select />
              <Datepicker />
              <Dialog />
              <Input />
              <Form />
              <AutoComplete />
              <Tooltip />
              <Badge />
              <LazyImage />
              <Alert />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Root;
