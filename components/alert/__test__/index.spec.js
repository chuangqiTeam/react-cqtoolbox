import React from 'react';
import {mount} from 'enzyme';
import Alert from '../../alert';
import theme from '../theme.css';


describe('Alert', () => {
  let mountedAlert;
  let props;

  beforeEach(() => {
    props = {
      type: "success",
      message: "",
      description: undefined,
      className: "testName",
      theme: theme
    };
    mountedAlert = undefined;
  });

  const getComp = () => {
    if (!mountedAlert) {
      mountedAlert = mount(<Alert {...props} />);
    }
    return mountedAlert;
  }

  describe('测试closeable属性', () => {

    it("当`closable`未定义,默认显示关闭", () => {
      const a = getComp().find(`a.${theme.closeIcon}`);
      expect(a.length).toBe(1);
    });

    it("当`closable`为false", () => {
      props.closable = false;
      const a = getComp().find(`a.${theme.closeIcon}`);
      expect(a.length).toBe(0);
    });

    it("当点击`close`", () => {
      getComp().find(`a.${theme.closeIcon}`).simulate('click');
      expect(mountedAlert.state().closed).toBe(true);
    });

  });

  describe('测试description属性', () => {
    it("当`description`不为空", () => {
      props.description = 'this is my description';
      const span = getComp().find(`.${theme.description}`);
      expect(span.text()).toBe(props.description);
    });
  })

  describe('测试showIcon属性', () => {
    it("当`showIcon`为false", () => {
      props.showIcon = false;
      props.closable = false;
      const div = getComp().find({"data-react-toolbox": "alert"}).first();
      expect(div.hasClass(theme.noIcon)).toBe(true);
      expect(div.find("FontIcon").length).toEqual(0);

    });
  })

});
