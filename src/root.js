import 'normalize.css';
import './style/style.css';

import React, { Component } from 'react';

import Button from './components/button';
import FontIcon from './components/font_icon';
import Select from './components/select';
import Dialog from './components/dialog';
import Input from './components/input';
import InputGroup from './components/input_group';
import Switch from './components/switch';
import Form from './components/form';
import AutoComplete from './components/autocomplete';
import Tooltip from './components/tooltip';
import Badge from './components/badge';
import Header from './components/header';
import Sider from './components/sider';
import Datepicker from './components/datepicker';
import LazyImage from './components/lazy_image';
import Alert from './components/alert';
import {Layout, Content} from '../components/layout';
import Tabs from './components/tabs';
import Pagination from './components/pagination';
import Tag from './components/tag';
import Table from './components/table';

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
              <InputGroup />
              <Switch />
              <Form />
              <AutoComplete />
              <Tooltip />
              <Badge />
              <LazyImage />
              <Alert />
              <Tabs />
              <Pagination />
              <Tag />
              <Table />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Root;
