import React from 'react';
import {mount} from 'enzyme';
import Trigger from '../Trigger';
import Button from '../../button';

jest.useFakeTimers();


describe('Trigger', () => {
  let props;
  let mountedTrigger;

  const trigger = () => {
    if (!mountedTrigger) {
      mountedTrigger = mount(<Trigger {...props}/>);
    }
    return mountedTrigger;
  }

  beforeEach(() => {
    props = {
      children: <Button />,
      action: undefined,
      popup: <div />,
      mask: undefined,
      maskClosable: undefined,
      popupTheme: undefined,
      popupAlign: undefined,
      popupVisible: undefined,
      matchTargetWidth: undefined,
      onPopupVisibleChange: undefined,
    };

    delete props.popupVisible;
    mountedTrigger = undefined;
  });

  it('渲染出子元素', () => {
    expect(trigger().find('Button').length).toBe(1);
  });

  describe('当action属性为click时(默认)', () => {

    it('点击后popupVisible状态变为true', () => {
      trigger().find('Button').simulate('click');
      expect(trigger().state('popupVisible')).toBe(true);
    });

  })

  describe('当action属性为hover时', () => {

    it('鼠标进入后popupVisible状态变为true', () => {
      props.action = 'hover';
      trigger().find('Button').simulate('mouseenter');
      expect(trigger().state('popupVisible')).toBe(true);
      trigger().find('Button').simulate('mouseleave');
      jest.runAllTimers();
      expect(trigger().state('popupVisible')).toBe(false);
    });

  })

});
