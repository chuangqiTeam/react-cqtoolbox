## 表格(Table)

表格

### 例子

```jsx

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

```

### 属性(Props)

值                 | 值类型                    | 默认       | 描述
:---------------- | :--------------------- | :------- | :-------------------
`columns`         | `Array`                |          | 表格列的配置描述，具体项见下表
`className`       | `String`               |          | `添加类`
`dataSource`      | `Array`                |          | `数据数组`
`loading`         | `Boolean`              | `false`  | `是否显示加载状态`
`hoverable`       | `Boolean`              | `true`   | `行是否可hover`
`scrollY`         | `Number`               |          | `纵向固定高度，设置后会固定表头`
`size`            | `String`               | `normal` | `small、normal两种选项`
`rowKey`          | `String` or `Function` |          | `自定义列数据在数据项中对应的 key`
`selectedRowKeys` | `Array`                |          | `指定选中项的 key 数组`
`theme`           | `Object`               |          | `添加自定义主题，具体项见下表`

### columns

值        | 值类型                  | 默认 | 描述
:------- | :------------------- | :- | :---------------------------------
`title`  | `String`             |    | `列头显示文字`
`key`    | `String`             |    | `React 需要的 key，建议设置`
`field`  | `String`             |    | `列数据在数据项中对应的 key`
`width`  | `String` or `Number` |    | `列宽度`
`render` | `Function`           |    | `生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引`

### theme

Name           | Description
:------------- | :----------
`table`        | 表格.
`loadWrapper`  | 加载条容器.
`normal`       | 正常表格大小.
`small`        | 小表格大小.
`th`           | 表头单元格.
`td`           | 单元格.
`withHover`    | 行hover样式.
`active`       | 行active样式.
`scrollTable`  | 固定高度表格容器.
`scrollHeader` | 固定高度表格表头.
`scrollBody`   | 固定高度表格内容.
