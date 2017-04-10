import React from 'react';
import Input from '../../components/input';
import FormItem from '../../components/form';
import Section from '../../components/section';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';

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
