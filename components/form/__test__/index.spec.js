import React from 'react';
import {mount, shallow, render} from 'enzyme';
import {FormItem} from '../index';
import theme from '../theme.css';
import Input from '../../input';

describe('FormItem', () => {

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {
      theme: theme,
      children: <Input placeholder="请输入内容..."/>
    };
    mountedComp = undefined;
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<FormItem {...props} />);
    }
    return mountedComp;
  }

  it("被div包裹", () => {
    const comp = getComp();
    const wrappingDiv = comp.find("div").first();
    expect(wrappingDiv.children()).toEqual(comp.children());
  })

  it("测试label属性", () => {
    props.label = "请输入密码："
    const comp = getComp();
    const label = comp.find('label');
    expect(label.length).toBeGreaterThanOrEqual(1);
    expect(label.first().text()).toEqual(props.label);

  })

  it("测试error属性", () => {
    props.error = "验证码错误！";
    props.theme = theme;
    const comp = getComp();
    const span = comp.find(`.${theme.error}`);
    expect(span.length).toBeGreaterThanOrEqual(1);
    expect(span.last().text()).toEqual(props.error);

  })

  it("总是渲染子formItem", () => {
    const comp = mount(<FormItem {...props} />);
    expect(comp.find(Input)).not.toBeNull();
  })


});
