import React from 'react';
import { mount } from 'enzyme';
import Button from '../../button';
import Tooltip from '../index';

const TooltipButton = Tooltip(Button);

describe('Tooltip', () => {
  it ('测试hover触发', () => {
    const wrapper = mount(<TooltipButton tooltip='Hello World!' />);

    expect(wrapper.state('open')).toBe(false);
    // 鼠标进入
    wrapper.find('button').at(0).simulate('mouseenter');
    // 修改popupVisible状态
    expect(wrapper.state('open')).toBe(true);

    expect(document.querySelectorAll('[data-react-toolbox="tooltip"]').length).toBeGreaterThan(0);
  });

});
