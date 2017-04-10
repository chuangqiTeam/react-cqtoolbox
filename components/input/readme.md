## 输入框(Input)

### 例子

```jsx
import React from 'react';
import Input from 'react-cqtoolbox/lib/input';
import Section from 'react-cqtoolbox/lib/section';

const InputTest = () => (
  <Section title="输入框">
    <div style={{width: 300 }}>
      <Input placeholder="请输入内容..."/>
      <br/>
      <Input prefix="search" />
      <br/>
      <Input prefix="search" suffix="close-circle" />
      <br/>
      <Input size="small" />
      <br/>
      <Input size="large" />
      <br/>
      <Input size="small" prefix="search" suffix="close-circle" />
      <br/>
      <Input size="large" prefix="search" suffix="close-circle" />
      <br/>
      <Input type="textarea" prefix="search" suffix="close-circle" />
    </div>

  </Section>
);

export default InputTest;
```

### 属性(Props)

值               | 值类型        | 默认       | 描述
:-------------- | :--------- | :------- | :-----------------------------
`type`          | `String`   | `input`  | `类型`
`size`          | `String`   | `normal` | `size、normal、large三种选项, 输入框尺寸`
`value`         | `String`   |          | `输入框内容`
`defaultValue`  | `String`   |          | `输入框默认内容`
`prefix`        | `Node`     |          | `前缀图标`
`suffix`        | `String`   |          | `后缀图标`
`onChange`      | `Function` |          | `输入内容后的回调`
`onPrefixClick` | `Function` |          | `点击后缀图标`
`onSuffixClick` | `Function` |          | `点击前缀图标`
`placeholder`   | `String`   |          | `占位字符`
`className`     | `String`   |          | `添加类`
`theme`         | `Object`   |          | `添加自定义主题`

### 主题(Theme)

Name           | Description
:------------- | :----------
`input`        | 输入框根类
`inputElement` | 输入框元素
`textarea`     | 多行输入框元素
`small`        | 小
`normal`       | 默认
`large`        | 大
`prefix`       | 前缀图标
`suffix`       | 后缀图标
`icon`         | 图标
`bar`          | 输入框底部条
