import React from 'react';
import Input from '../../components/input';
import Section from '../../components/section';

const InputTest = () => (
  <Section title="输入框">
    <div style={{width: 300 }}>
      <Input placeholder="请输入内容..."/>
      <br/>
      <Input prefix="search" defaultValue="你好"/>
      <br/>
      <Input prefix="search" suffix="close-circle" defaultValue="你好"/>
      <br/>
      <Input size="small" defaultValue="你好"/>
      <br/>
      <Input size="large" defaultValue="你好"/>
      <br/>
      <Input size="small" prefix="search" suffix="close-circle" defaultValue="你好"/>
      <br/>
      <Input size="large" prefix="search" suffix="close-circle" defaultValue="你好"/>
      <br/>
      <Input type="textarea" prefix="search" suffix="close-circle" defaultValue="你好"/>
    </div>

  </Section>
);

export default InputTest;
