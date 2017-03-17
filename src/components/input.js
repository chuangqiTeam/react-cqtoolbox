import React from 'react';
import Input from '../../components/input';

const InputTest = () => (
  <section>
    <h5>输入框</h5>

    <div><Input defaultValue="你好" /></div>

    <div><Input prefix="search" defaultValue="你好" /></div>

    <div><Input prefix="search" suffix="close-circle" defaultValue="你好" /></div>

    <div><Input size="small" defaultValue="你好" /></div>

    <div><Input size="large" defaultValue="你好" /></div>

    <div><Input size="small" prefix="search" suffix="close-circle" defaultValue="你好" /></div>

    <div><Input size="large" prefix="search" suffix="close-circle" defaultValue="你好" /></div>

    <div><Input type="textarea" prefix="search" suffix="close-circle" defaultValue="你好" /></div>

  </section>
);

export default InputTest;
