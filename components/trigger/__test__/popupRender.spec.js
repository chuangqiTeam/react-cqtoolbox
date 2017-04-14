import React from 'react';
import {mount, unmount} from 'enzyme';
import Button from '../../button';
import Trigger from '../Trigger';
import popupRenderFactory from '../popupRender.js';

const PopupRenderElement = popupRenderFactory()(Trigger);

jest.useFakeTimers();


describe('popupRender', () => {
  let props;
  let mountedTrigger;

  const trigger = () => {
    if (!mountedTrigger) {
      mountedTrigger = mount(<PopupRenderElement {...props}/>);
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

    mountedTrigger = undefined;
  })


  describe('当popupVisible由false变为true', () => {
    beforeEach(() => {
      props.popupVisible = false;
    });

    it('rendered状态先为false', () => {
      trigger().setProps({popupVisible: true});
      expect(trigger().state('rendered')).toBe(true);
      expect(trigger().state('popupVisible')).toBe(false);
    });

    it('动画过渡后,popupVisible状态先为true', () => {
      trigger().setProps({popupVisible: true});
      jest.runAllTimers();
      expect(trigger().state('rendered')).toBe(true);
      expect(trigger().state('popupVisible')).toBe(true);
    });
  })

  describe('当popupVisible由true变为false', () => {
    beforeEach(() => {
      props.popupVisible = true;
    });

    it('popupVisible状态先为false', () => {
      trigger().setProps({popupVisible: false});
      expect(trigger().state('rendered')).toBe(true);
      expect(trigger().state('popupVisible')).toBe(false);
    });

    it('动画过渡后,popupVisible状态先为false', () => {
      trigger().setProps({popupVisible: false});
      jest.runAllTimers();
      expect(trigger().state('rendered')).toBe(false);
      expect(trigger().state('popupVisible')).toBe(false);
    });
  })

});
