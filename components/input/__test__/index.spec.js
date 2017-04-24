import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {Input} from '../index';
import theme from '../theme.css';
import {FontIcon} from '../../font_icon';

describe('Input', () => {

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {
      theme: theme
    };
    mountedComp = undefined;
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<Input {...props} />);
    }
    return mountedComp;
  }

  it("测试input", () => {
    const comp = getComp();
    const input = comp.find('input');
    expect(input.length).toBe(1);
    expect(input.hasClass(theme.inputElement)).toBe(true);

  })

  it("测试input事件：onChange", () => {
    const fn = jest.fn();
    props.onChange = fn;
    const comp = getComp();
    comp.find('input').simulate('change');
    expect(fn).toHaveBeenCalled()
  });

  it("总是渲染bar", () => {
    expect(getComp().find(`.${theme.bar}`).length).toBeGreaterThanOrEqual(1);
  })

  it("当type为textarea时", ()=> {
    props.type= "textarea";
    const comp = getComp();
    expect(comp.find("textarea").length).toBe(1);
  })

  describe("测试prefixIcon", () => {
    it("测试prefixIcon渲染", () => {
      props.prefix = "prefix";
      const comp = getComp();
      expect(comp.find(FontIcon).first().props().className).toContain(theme.prefix);
    })

    it("测试prefixIcon事件回调 onPrefixClick", () => {
      props.prefix = "prefix";
      props.onPrefixClick = jest.fn();
      const comp = getComp();
      comp.find(FontIcon).first().simulate('click');
      expect(props.onPrefixClick).toHaveBeenCalled()
    })

  })

  describe("suffixIcon", () => {
    it("测试suffixIcon渲染", () => {
      props.suffix = "suffix";
      const comp = getComp();
      expect(comp.find(FontIcon).last().props().className).toContain(theme.suffix);
    })

    it("测试suffixIcon事件回调 onSuffixClick", () => {
      props.suffix = "suffix";
      props.onSuffixClick = jest.fn();
      const comp = getComp();
      comp.find(FontIcon).last().simulate('click');
      expect(props.onSuffixClick).toHaveBeenCalled()
    })
  })

})
