import React, { Component } from 'react';
import PropTypes from 'prop-types';
import allRanges from './ranges.js';
import format from 'date-fns/format';
import locale from 'react-date-range/dist/locale/zh-CN.js';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, DateRange) => {
  class DateRangeSelect extends Component {

    static propTypes = {
      startDate: PropTypes.object,
      endDate: PropTypes.object,
      minDate: PropTypes.object,
      maxDate: PropTypes.object,
      onChange: PropTypes.func,
      ranges: PropTypes.arrayOf(
        PropTypes.oneOf(['今日', '昨日', '近7日', '近30日', '近三个月', '近一年'])
      )
    }

    static defaultProps = {
      minDate: new Date(2016, 3, 1),
      maxDate: new Date(),
      ranges: ['今日', '昨日', '近7日', '近30日', '近三个月', '近一年'],
      onChange: () => void 0,
    }

    constructor(props) {
      super(props);

      this.state = {
        ranges: props.ranges.reduce((ranges, key) => {
          ranges.push(allRanges[key]);
          return ranges;
        }, []),
        startDate: 'startDate' in props ? props.startDate : new Date(),
        endDate: 'endDate' in props ? props.endDate : new Date(),
        open: false,
      };
    }

    componentWillReceiveProps(nextProps) {
      if ('startDate' in nextProps) {
        this.setState({ startDate: nextProps.startDate });
      }

      if ('endDate' in nextProps) {
        this.setState({ endDate: nextProps.endDate });
      }

      if (nextProps.ranges !== this.props.ranges) {
        this.setState({ ranges: nextProps.ranges.reduce((ranges, key) => {
          ranges.push(allRanges[key]);
          return ranges;
        }, []), })
      }
    }

    handleSelectToggle = () => {
      this.setState({ open: !this.state.open });
    }

    handleRangeSelect = ({section1: {startDate, endDate}}) => {
      const props = this.props;

      if (!('startDate' in props)) {
        this.setState({ startDate });
      }

      if (!('endDate' in this.props)) {
        this.setState({ endDate });
      }

      props.onChange(startDate, endDate);
    }

    handleTwoStepChange = () => {
      this.handleSelectToggle();
    }

    getDateRange = () => {
      const {
        minDate,
        maxDate,
      } = this.props;

      const {
        ranges,
        startDate,
        endDate,
      } = this.state;

      const range = [{
        startDate,
        endDate,
        key: 'section1',
      }];

      return (
        <DateRange
          locale={locale}
          ranges={range}
          inputRanges={[]}
          rangeColors={['rgb(0, 188, 212)']}
          direction="horizontal"
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.handleRangeSelect}
          onTwoStepChange={this.handleTwoStepChange}
          staticRanges={ranges} />
      );
    }

    render() {
      const {
        open,
        startDate,
        endDate,
      } = this.state;

      const dateRange = this.getDateRange();
      const selectedItem = {label: format(startDate, 'YYYY年MM月D日') + '~' + format(endDate, 'YYYY年MM月D日')};

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={open}
          onPopupVisibleChange={this.handleSelectToggle}
          popup={dateRange}>
          <SelectInput
            selectedItem={selectedItem}
            isActive={open}
            onClick={this.handleSelectToggle} />
        </Trigger>
      );
    }
  }

  return DateRangeSelect;
};

export {factory as dateRangeSelectFactory};
