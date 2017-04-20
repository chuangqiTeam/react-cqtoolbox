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

  it("不传入startDate或endDate属性时,默认使用当前时间", () => {
    const comp = getComp();
    expect(comp.state().startDate.unix()).toEqual(timestamp);
    expect(comp.state().endDate.unix()).toEqual(timestamp);
    expect(comp.find("SelectInput").props().selectedItem.label).toEqual("2017年02月14日~2017年02月14日");
  });

  it("传入onChange属性", () => {
    const comp = getComp();
    const dateRange = comp.instance().getDateRange();
    expect(dateRange.props.onChange).toBeInstanceOf(Function);
  })

  it("测试 DateRange", () => {
    const comp = getComp();
    const dateRange = comp.instance().getDateRange();
    expect(dateRange.props.date).toEqual(comp.state().date);
    const tiggerProps = comp.find("Trigger").props();
    expect(tiggerProps.popup.props.date).toEqual(comp.state().date);
    expect(tiggerProps.popup.type.name).toEqual("DateRange");
  })
});

