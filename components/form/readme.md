# 表单项(FormItem)

为输入框添加label和错误信息。

## 例子

```jsx
import React from 'react';
import Input from 'react-cqtoolbox/lib/input';
import FormItem from 'react-cqtoolbox/lib/form';
import Section from 'react-cqtoolbox/lib/section';
import Button from 'react-cqtoolbox/lib/button';
import Checkbox from 'react-cqtoolbox/lib/checkbox';

const CodeButton = () => <Button label="获取验证码" />;

const FormTest = () => (
  <Section title="表单">

    <form style={{ width: 400 }}>

      <FormItem label="手机号">
        <Input placeholder="请输入内容..." />
      </FormItem>

      <FormItem>
        <Input placeholder="验证码" suffix={<CodeButton />} />
      </FormItem>

      <FormItem label="密码">
        <Input type="password" placeholder="密码" suffix="eye" />
      </FormItem>

      <FormItem>
        <Checkbox checked label="下次自动登录" />
      </FormItem>

      <FormItem>
        <Button fullWidth primary raised label="登录" />
      </FormItem>
    </form>

  </Section>
);

export default FormTest;
```

## 属性(Props)

值           | 值类型      | 默认    | 描述
:---------- | :------- | :---- | :--------
`label`     | `String  | Node` |           | `label 标签的文本`
`error`     | `String  | Node` |           | `错误信息`
`className` | `String` |       | `添加类`
`children`  | `Object` |       | `子元素`
`theme`     | `Object` |       | `添加自定义主题`

## 主题(Theme)

Name        | Description
:---------- | :---------------
`formItem`  | `菜单项(根类)`
`withInput` | `子类是Input组件(根类)`
`errored`   | `输入错误(根类)`
`label`     | `label标签类`
`error`     | `错误信息样式`
