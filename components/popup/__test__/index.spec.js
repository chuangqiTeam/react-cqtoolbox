import React from 'react';
import { mount } from 'enzyme';
import Popup from '../popup';
import theme from '../theme.css';



describe('Popup', () => {

  describe('#render', () => {

    it('渲染正确', () => {
      const wrapper = mount(
        <Popup theme={theme}>
          <span>浮层</span>
      </Popup>);
      expect(wrapper.render()).toMatchSnapshot();
    });

    it('渲染出mask浮层', () => {
      const wrapper = mount(
        <Popup mask theme={theme}>
          <span>浮层</span>
      </Popup>);
      expect(wrapper.render()).toMatchSnapshot();
    });

  });
})
