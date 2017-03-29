import React from 'react';
import Input from '../../components/input';
import Select from '../../components/select';
import InputGroup from '../../components/input_group';
import Section from '../../components/section';
import Button from '../../components/button';

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

    <InputGroup size="small">
      <Input placeholder="请输入内容..." />
      <Button primary raised label="搜索" />
    </InputGroup>

    <br />

    <InputGroup>
      <Input placeholder="请输入内容..." />
      <Button primary raised label="搜索" />
    </InputGroup>

    <br />

    <InputGroup>
      <Select {...selectData} />
      <Input placeholder="请输入内容..." suffix="search" />
    </InputGroup>

    <br />

    <InputGroup size="small">
      <Select {...selectData} />
      <Input placeholder="请输入内容..." />
      <Button label="搜索" />
    </InputGroup>

    <br />

    <InputGroup>
      <Select {...selectData} />
      <Input placeholder="请输入内容..." />
      <Button label="搜索" />
    </InputGroup>

    <br />

    <InputGroup size="large">
      <Select {...selectData} />
      <Input placeholder="请输入内容..." />
      <Button label="搜索" />
    </InputGroup>

  </Section>
);

export default GroupTest;
