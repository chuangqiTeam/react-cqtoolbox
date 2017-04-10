## 转换开关(Switch)

开关选择器。

### 例子

```jsx
import React, {Component} from 'react';
import Switch from 'react-cqtoolbox/lib/switch';
import Section from 'react-cqtoolbox/lib/section';


class SwitchTest extends Component {
  state = {
    value: true,
  };

  handleChange = (value) => {
    this.setState({ value: value });
  };

  render() {
    return (
      <Section title="转换开关">
        <Switch
          checked={this.state.value}
          label="微信提醒"
          onChange={this.handleChange}
        />
      </Section>
    );
  }
}

export default SwitchTest;

```

### 属性(Props)

值           | 值类型        | 默认      | 描述
:---------- | :--------- | :------ | :-----------
`checked`   | `Boolean`  | `false` | `是否选中`
`disabled`  | `Boolean`  | `false` | `禁止选中`
`label`     | `String`   |         | `label标签`
`name`      | `String`   |         | `input名字`
`onChange`  | `Function` |         | `切换后的回调`
`onBlur`    | `Function` |         | `失去焦点`
`onFocus`   | `Function` |         | `获得焦点`
`ripple`    | `Boolean`  |         | `是否点击显示波纹动画`
`className` | `string`   |         | `根元素样式类`
`theme`     | `Object`   |         | `添加自定义主题`

### 主题(Theme)

Name       | Description
:--------- | :----------
`field`    | `开关(根类)`
`disabled` | `禁止(根类)`
`input`    | `input元素`
`off`      | `关闭`
`on`       | `打开`
`ripple`   | `波纹样式`
`text`     | `label文字`
`thumb`    | `开关按钮`
