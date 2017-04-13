import React from 'react';
import { mount, shallow } from 'enzyme';
import { Button } from '../Button';
import theme from '../theme.css';

describe('Button', () => {

  describe('#render', () => {

    it('默认使用flat和neutral样式', () => {
      const wrapper = mount(<Button theme={theme} />);
      const { className } = wrapper.find('button').props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.neutral);
    });

    it('渲染accent按钮和accent样式', () => {
      const wrapper = mount(<Button accent theme={theme} />);
      const { className } = wrapper.find('button').props();
      expect(className).toContain(theme.flat);
      expect(className).toContain(theme.accent);
    });

    it('渲染floating mini按钮', () => {
      const wrapper = mount(<Button floating mini theme={theme} />);
      const { className } = wrapper.find('button').props();
      expect(className).toContain(theme.floating);
      expect(className).toContain(theme.neutral);
      expect(className).toContain(theme.mini);
    });

    it('渲染Icon按钮', () => {
      const wrapper = mount(<Button icon="plus" theme={theme} />);
      const { className } = wrapper.find('[data-react-toolbox="font-icon"]').props();
      expect(className).toContain(theme.icon);
    });
  });

  describe('#onClick', () => {
    it('传递到onClick监听事件', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Button onClick={onClick} />);
      wrapper.simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });

})
