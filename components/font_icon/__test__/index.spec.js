import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {CaretDownIcon, FontIcon} from '../index';


describe('CaretDownIcon', () => {
  it("测试传入color参数", () => {
    const color = "#f98341";
    const props = {color};
    const comp = render(<CaretDownIcon {...props}/>);
    const style = comp.find("svg").attr().style;

    expect(new RegExp(`color:${color}`).test(style)).toBe(true);
    expect(new RegExp(`fill:${color}`).test(style)).toBe(true);
  })

});

describe('FontIcon', () => {

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {
      children: "&",
      className: "testClassName",
    };
    mountedComp = undefined;
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<FontIcon {...props} />);
    }
    return mountedComp;
  }
  it("总是渲染span", () => {
    expect(getComp().find('span').length).toBeGreaterThan(0);
  })

  it("最外层span包裹全部元素", () => {
    const comp = getComp();
    const wrappingSpan = comp.find("span").first();
    expect(wrappingSpan.children()).toEqual(comp.children());
  })

  it("测试children属性", () => {
    const comp = getComp();
    expect(comp.find("span").first().text()).toEqual(props.children);
  })


})
