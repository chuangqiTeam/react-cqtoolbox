import React from 'react';
import Input from '../../components/input';
import FormItem from '../../components/form';

const InputTest = () => (
  <section>
    <h5>表单</h5>

    <form style={{ width: 400 }}>
      <FormItem label="手机号">
        <Input placeholder="请输入内容..." />
      </FormItem>
      <FormItem error="手机格式错误，请重新输入">
        <Input placeholder="密码不少于六位..." />
      </FormItem>
    </form>

  </section>
);

export default InputTest;
