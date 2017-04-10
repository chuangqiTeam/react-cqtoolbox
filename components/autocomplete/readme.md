## 自动完成(Autocomplete)

输入框自动完成功能。

### 例子

```jsx
import React, {Component} from 'react';
import AutoComplete from 'react-cqtoolbox/lib/autocomplete';
import Input from 'react-cqtoolbox/lib/input';
import Section from 'react-cqtoolbox/lib/section';

class AutoCompleteTest extends Component {
  state = {
    dataSource: [],
    value: '',
  }

  onChange = (value) => {
    this.setState({
      value: value,
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource, value } = this.state;

    return (
      <Section title="自动补全">
          <AutoComplete
            align={{
              points: ['tl', 'tr'], // 将sourceNode的左上角与targetNode的右上角对齐
              offset: [10, 20] // 相对sourceNode偏移x的10px和y的20px
            }}
            value={value}
            dataSource={dataSource}
            onChange={this.onChange} />
      </Section>
    )
  }
}

export default AutoCompleteTest;
```

### 属性(Props)

值              | 值类型        | 默认                                       | 描述
:------------- | :--------- | :--------------------------------------- | :------------------------------
`align`        | `Object`   | { point: ['tl', 'bl'], offset: [0, 10] } | `下拉框信息位置，详情配置如下`
`value`        | `String`   |                                          | `值`
`defaultValue` | `String`   |                                          | `默认值`
`dataSource`   | `Array`    | []                                       | `数据源，包含值或对象(label， value字段)的数组`
`onSelect`     | `Function` |                                          | `选择下拉项`
`onChange`     | `Function` |                                          | `输入框输入`
`children`     | `Object`   |                                          | `Input组件，可覆盖默认Input组件`
`theme`        | `Object`   |                                          | `添加自定义主题`

### 主题(Theme)

Name       | Description
:--------- | :-----------
`menu`     | `下拉菜单样式`
`menuItem` | `下拉菜单项样式`
`selected` | `激活的下拉菜单项样式`

### Align对象

属性名      | 描述
:------- | :---------------------------
`point`  | `sourceNode与targetNode的对齐方式`
`offset` | `相对于sourceNode的偏移量`
