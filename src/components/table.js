import React, {Component} from 'react';
import Table from '../../components/table';
import Section from '../../components/section';
import FontIcon from '../../components/font_icon';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  field: 'name',
  key: 'name',
  width: '20%',

}, {
  title: '年龄',
  field: 'age',
  key: 'age',
  width: '20%',
}, {
  title: '住址',
  field: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operate',
  render: (field, data, index) => (
    <FontIcon value="close" />
  ),
}];

class TableTest extends Component {
  render() {

    return (
      <Section title="表格">

        <h3>标签方式</h3>
        <Table>
          <Table.Head>
            <Table.Tr>
              <Table.Th>关键词</Table.Th>
              <Table.Th>当前排名</Table.Th>
              <Table.Th>排名变化</Table.Th>
              <Table.Th>搜索指数</Table.Th>
              <Table.Th>搜索结果数</Table.Th>
            </Table.Tr>
          </Table.Head>
          <Table.Body>
            <Table.Tr>
              <Table.Td>微信</Table.Td>
              <Table.Td>999</Table.Td>
              <Table.Td>不变</Table.Td>
              <Table.Td>0</Table.Td>
              <Table.Td>4598</Table.Td>
            </Table.Tr>
          </Table.Body>
        </Table>

        <h3>数据方式<small>(推荐)</small></h3>
        <Table size="small" dataSource={dataSource} columns={columns} />
        <br />
        <Table size="small" loading columns={columns} />
      </Section>
    );
  }
}

export default TableTest;
