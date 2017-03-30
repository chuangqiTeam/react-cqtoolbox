import React, {Component} from 'react';
import Table from '../../components/table';
import Section from '../../components/section';
import FontIcon from '../../components/font_icon';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '5',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '6',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '7',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '8',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
];

const columns = [
  {
    title: '姓名',
    field: 'name',
    key: 'name',
    width: '20%'
  }, {
    title: '年龄',
    field: 'age',
    key: 'age',
    width: '20%'
  }, {
    title: '住址',
    field: 'address',
    key: 'address',
    width: '50%'
  }, {
    title: '操作',
    key: 'operate',
    width: '10%',
    render: (field, data, index) => (<FontIcon value="close"/>)
  }
];

class TableTest extends Component {
  render() {
    return (
      <Section title="表格">
        <Table size="small" hoverable dataSource={dataSource} columns={columns} selectedRowKeys={['2', '3']}/>
        <br/>
        <Table scrollY={200} dataSource={dataSource} columns={columns}/>
      </Section>
    );
  }
}

export default TableTest;
