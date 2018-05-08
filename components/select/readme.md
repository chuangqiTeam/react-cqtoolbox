## 下拉框(Select)

### 例子

```JSX
import React, {Component} from 'react';
import {Select} from 'react-rainie-toolbox/lib/select';
import Section from 'react-rainie-toolbox/lib/section';

const countrys = [
    {value: 'CN', label: '中国'},
    {value: 'US', label: '美国'},
    {value: 'HK', label: '中国香港'},
    {value: 'TW', label: '中国台湾'},
];

class SelectTest extends Component {

  render() {
    const selectData = {
      data: countrys,
      maxRowNum: 8,
      onChange: console.log.bind(console),
    };

    return (
      <Section title="下拉框">
        <Select {...selectData} />
      </Section>
    )
  }
}

```

### 属性(Props)

值           | 值类型        | 默认   | 描述
:---------- | :--------- | :--- | :----------------------------
`value`     | `Any`      |      | `值`
`data`      | `Array`    |      | `数据源，包含对象(label， value字段)的数组`
`maxRowNum` | `Number`   | `10` | `下拉框显示的最大行数`
`onChange`  | `Function` |      | `当值变化触发onChange函数`
`theme`     | `Object`   |      | `添加自定义主题`

### 主题(Theme)

Name       | Description
:--------- | :----------
`menu`     | `下拉框菜单样式`
`menuItem` | `下拉框菜单项样式`
`menuOutter` | `菜单容器样式`



## 级联下拉框(CascadeSelect)

### 例子

```jsx

import React, {Component} from 'react';
import {CascadeSelect} from 'react-rainie-toolbox/lib/select';
import Section from 'react-rainie-toolbox/lib/section';

const genres = [
  {
    "value": 36,
    "label": "总榜"
  },
  {
    "value": 6000,
    "label": "商务"
  },
  {
    "value": 6014,
    "label": "游戏",
    "children": [
      {
        "value": 7001,
        "label": "动作游戏"
      },
      {
        "value": 7002,
        "parentvalue": 6014,
        "nameEnglish": "Adventure",
        "label": "探险游戏"
      }
     ]
  }
];

class SelectTest extends Component {
  render() {
    const selectData = {
      data: genres,
      onChange: console.log.bind(console),
    };

    return (
      <Section title="下拉框">
        <CascadeSelect {...selectData} />
      </Section>
    )
  }
}
```

### 属性(Props)

值                  | 值类型        | 默认   | 描述
:----------------- | :--------- | :--- | :----------------------------
`value`            | `Any`      |      | `值`
`data`             | `Array`    |      | `数据源，包含对象(label， value字段)的数组`
`maxRowNum`        | `Number`   | `10` | `下拉框显示的最大行数`
`maxCascadeRowNum` | `Number`   | `5`  | `级联下拉框显示的最大行数`
`cascadeAction`    | `String`   |      | `级联下拉框触发行为`
`onChange`         | `Function` |      | `当值变化触发onChange函数`
`theme`            | `Object`   |      | `添加自定义主题`

### 主题(Theme)

Name             | Description
:--------------- | :----------
`menu`           | `下拉框菜单样式`
`menuItem`       | `下拉框菜单项样式`
`menuOutter`     | `菜单容器样式`
`popup`          | `浮层`
`popupMenu`      | `浮层菜单`
`popupMenuInner` | `浮层菜单内部元素`
`subMenuItem`    | `浮层菜单标题项`
