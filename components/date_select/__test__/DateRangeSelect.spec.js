import React from 'react';
import {mount,shallow} from 'enzyme';
import {DateRangeSelect} from '../index';
import theme from '../theme.css';
import moment from 'moment';

describe('DateRangeSelect', () => {
  const timestamp = 1487076708;
  Date.now = jest.fn(() => timestamp * 1000) //2017/2/14 20:51:48

  let mountedComp;
  let props;

  beforeEach(() => {
    props = {};
    mountedComp = undefined;
  });

  const getComp = () => {
    if (!mountedComp) {
      mountedComp = mount(<DateRangeSelect {...props} />);
    }
    return mountedComp;
  }


  it("测试click事件", () => {

  });

  it("不传入date属性时,默认使用当前时间", () => {

  });

  it("传入date属性", () => {

  })

  it("测试 calendar", () => {

  })


});

