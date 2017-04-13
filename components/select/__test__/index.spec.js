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
  it('传入value（智能组件下）选择正常', () => {
    const onChange = jest.fn();

    const selectData = {
      value: countrys[0].value,
      data: countrys,
      onChange: onChange,
      theme: theme,
    };

    const wrapper = mount(<Select {...selectData} />);

    // 选择第二项
    wrapper.find('SelectInput').simulate('click');

    document.querySelectorAll('.menuItem')[1].click();
    wrapper.setProps({value: countrys[1].value});

    // 正常调用onChange
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(countrys[1]);

    // 正常显示
    expect(wrapper.state('value')).toBe(countrys[1].value);
  });

  it('不传入value（木偶组件下）选择正常', () => {
    const onChange = jest.fn();

    const selectData = {
      data: countrys,
      onChange: onChange,
      theme: theme,
    };

    const wrapper = mount(<Select {...selectData} />);

    // 选择第二项
    wrapper.find('SelectInput').simulate('click');

    document.querySelectorAll('.menuItem')[5].click();

    // 正常调用onChange
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(countrys[1]);

    // 正常显示
    expect(wrapper.state('value')).toBe(countrys[1].value);
  });

})
