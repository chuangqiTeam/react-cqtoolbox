import React from 'react';
import {mount,shallow} from 'enzyme';
import Checkbox, {Check} from '../index';
import theme from '../theme.css';

describe('check', () => {
  it("测试点击事件", () => {
    const fn = jest.fn();
    const check = mount(<Check onMouseDown={fn}/>);
    check.simulate("mouseDown");
    expect(fn).toHaveBeenCalled();
  })

  it("测试checked为true时", () => {
    const fn = jest.fn();
    const props = {
      theme,
      checked: true
    }
    const check = mount(<Check {...props}/>);
    const div = check.find({"data-react-toolbox": "check"});
    expect(div.hasClass(theme.checked)).toBe(true);
  })
});

describe('checkbox', () => {

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {};
    mountedComp = undefined;
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<Checkbox {...props} />);
    }
    return mountedComp;
  }

  it("测试点击事件,初始checked为false", () => {
    const fn = jest.fn();
    props = {
      onChange: fn,
      checked: false,
      ...props
    };
    const comp = getComp();

    const blurFn = jest.fn();
    comp.instance().blur = blurFn;
    comp.update();

    comp.find('input').simulate('click');

    expect(fn).toHaveBeenCalled();
    expect(fn.mock.calls[0][0]).toBe(true);
    expect(blurFn).toHaveBeenCalled();

  });

  it("测试label不为空", () => {
    props = {
      label: "I am a label",
      ...props
    };
    const label = getComp().find({"data-react-toolbox": "label"});
    expect(label.length).toBe(1);
    expect(label.text()).toBe(props.label);
  });

  it("测试disabled为true", () => {
    const fn = jest.fn();
    props = {
      onChange: fn,
      disabled: true,
      theme,
      ...props
    };
    const input = getComp().find("input");
    const label = mountedComp.find("label").first();
    expect(input.props().disabled).toBe(true);
    expect(fn).toHaveBeenCalledTimes(0);
    expect(label.hasClass(theme.disabled)).toBe(true);
  });


});
