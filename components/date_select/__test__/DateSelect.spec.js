import React from 'react';
import {mount, shallow} from 'enzyme';
import {DateSelect} from '../index';
import theme from '../theme.css';
import moment from 'moment';

describe('DateSelect', () => {
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
      mountedComp = mount(<DateSelect {...props} />);
    }
    return mountedComp;
  }

  it("是否渲染SelectInput", () => {
    const comp = getComp();
    const selectInput = comp.find("SelectInput");
    expect(selectInput.length).toBeGreaterThan(0);
  })

  it("是否渲染Trigger", () => {
    const comp = getComp();
    const trigger = comp.find("Trigger");
    expect(trigger.length).toBeGreaterThan(0);
  })

  it("测试click事件", () => {
    const comp = getComp();
    comp.simulate("click");
    expect(comp.state().open).toBe(true);
    //click twice
    comp.simulate("click");
    expect(comp.state().open).toBe(false);
  });

  it("不传入date属性时,默认使用当前时间", () => {

    const comp = getComp();
    expect(comp.state().date.unix()).toEqual(timestamp);
    const select = comp.find("SelectInput");
    expect(select.props().selectedItem.label).toEqual('2017年02月14日')

  });

  it("传入date属性", () => {
    const date = moment.unix(timestamp);
    const comp = getComp();
    const select = comp.find("SelectInput");
    expect(select.props().selectedItem.label).toEqual('2017年02月14日')
  })

  it("测试 calendar", () => {
    const comp = getComp();
    const calendar = comp.instance().getCalendar();
    expect(calendar.props.date).toEqual(comp.state().date);
    expect(comp.find("Trigger").props().popup.props.date).toEqual(comp.state().date);
  })

});

