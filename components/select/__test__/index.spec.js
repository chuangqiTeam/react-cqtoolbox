import React from 'react';
import { mount } from 'enzyme';
import {Select} from '../Select';
import theme from '../theme.css';

const countrys = [
    {value: 'CN', label: '中国'},
    {value: 'US', label: '美国'},
    {value: 'HK', label: '中国香港'},
    {value: 'TW', label: '中国台湾'},
];

describe('Select', () => {

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {
      data: countrys,
      onChange: undefined,
      theme: theme,
    };
    mountedComp = undefined;
    document.querySelector('.menu') &&
      document.querySelector('.menu').remove();
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<Select {...props} />);
    }
    return mountedComp;
  }


  it('传入value（智能组件下）选择正常', () => {
    const onChange = jest.fn();
    props.onChange = onChange;
    props.value = countrys[0].value;


    // 选择第二项
    getComp().find('SelectInput').simulate('click');

    document.querySelectorAll('.menuItem')[1].click();
    getComp().setProps({value: countrys[1].value});

    // 正常调用onChange
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(countrys[1].value);

    // 正常显示
    expect(getComp().state('value')).toBe(countrys[1].value);
  });

  it('不传入value（木偶组件下）选择正常', () => {
    const onChange = jest.fn();
    props.onChange = onChange;

    // 选择第二项
    getComp().find('SelectInput').simulate('click');
    document.querySelectorAll('.menuItem')[1].click();

    // 正常调用onChange
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(countrys[1].value);

    // 正常显示
    expect(getComp().state('value')).toBe(countrys[1].value);
  });

  it('当returnValue属性为false, 返回数据一项', () => {
    const onChange = jest.fn();
    props.onChange = onChange;
    props.returnValue = false;
    props.value = countrys[0].value;
    // 选择第二项
    getComp().find('SelectInput').simulate('click');

    document.querySelectorAll('.menuItem')[1].click();
    getComp().setProps({value: countrys[1].value});

    // 正常调用onChange
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(countrys[1]);

  })

})
