## 组合输入框(InputGroup)

组合输入框可以结合下拉框、按钮、输入框(必须）

### 例子

```JSX
import React from 'react';
import Input from 'react-cqtoolbox/lib/input';
import Select from 'react-cqtoolbox/lib/select';
import InputGroup from 'react-cqtoolbox/lib/input_group';
import Section from 'react-cqtoolbox/lib/section';
import Button from 'react-cqtoolbox/lib/button';

const countrys = [
  {value: 'RU', label: '俄罗斯'},
  {value: 'BR', label: '巴西'},
  {value: 'VN', label: '越南'},
  {value: 'KH', label: '柬埔寨'},
  {value: 'PH', label: '菲律宾'}
];

const selectData = {
  value: 1,
  data: countrys,
  maxRowNum: 8,
  onChange: console.log.bind(console),
};


const GroupTest = () => (
  <Section title="组合输入框">
    <InputGroup>
      <Select {...selectData} />
      <Input placeholder="请输入内容..." />
      <Button label="搜索" />
    </InputGroup>
  </Section>
);

export default GroupTest;

```

### 属性(Props)

值           | 值类型      | 默认       | 描述
:---------- | :------- | :------- | :---------------------------
`size`      | `String` | `normal` | `small、normal、large三种选项尺寸`
`className` | `String` |          | `添加类`
`children`  | `Node`   |          | `子元素(Button、Select或Input组件)`
`theme`     | `Object` |          | `添加自定义主题`

### 主题(Theme)

Name           | Description
:------------- | :-----------------
`inputGroup`   | `组合输入框(根类)`
`input`        | `Input自定义主题`
`select_input` | `SelectInput自定义主题`
`small`        | `小尺寸`
`normal`       | `默认尺寸`
`large`        | `大尺寸`
