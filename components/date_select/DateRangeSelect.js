import React, { Component, PropTypes } from 'react';
import theme from './theme.css';
import moment from 'moment';
import allRanges from './ranges.js';
import pick from 'ramda/src/pick';

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
      ),
      theme: PropTypes.shape({
        DaySelected: PropTypes.object,
        DayInRange: PropTypes.object,
      })
    }

    static defaultProps = {
      minDate: moment('2016-03-01'),
      maxDate: moment(),
      ranges: ['今日', '昨日', '近7日', '近30日', '近三个月', '近一年'],
      onChange: () => void 0,
    }

    constructor(props) {
      super(props);

      this.state = {
        ranges: pick(props.ranges, allRanges),
        startDate: 'startDate' in props ? props.startDate : moment(),
        endDate: 'endDate' in props ? props.endDate : moment(),
        open: false,
      };

      this.defaultTheme = {
        DaySelected: {
          background: theme.DaySelected_background,
        },
        DayInRange: {
            background: theme.DayInRange_background,
            color: theme.DayInRange_color,
        },
      };
    }

    componentWillReceiveProps(nextProps) {
      if ('startDate' in nextProps) {
        this.setState({ startDate: nextProps.startDate });
      }

      if ('endDate' in nextProps) {
        this.setState({ date: nextProps.endDate });
      }

      if (nextProps.ranges !== this.props.ranges) {
        this.setState({ ranges: pick(nextProps.ranges, allRanges) })
      }
    }

    handleSelectToggle = () => {
      this.setState({ open: !this.state.open });
    }

    handleRangeSelect = ({ startDate, endDate }) => {
      const props = this.props;

      if (!('startDate' in props)) {
        this.setState({ startDate });
      }

      if (!('endDate' in this.props)) {
        this.setState({ endDate });
      }

      this.handleSelectToggle();
      props.onChange(startDate, endDate);
    }

    getDateRange = () => {
      const {
        theme,
        minDate,
        maxDate,
      } = this.props;

      const {
        ranges,
        startDate,
        endDate,
      } = this.state;

      return (
        <DateRange
          lang="cn"
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          twoStepChange={true}
          onChange={this.handleRangeSelect}
          linkedCalendars={true}
          theme={theme || this.defaultTheme}
          ranges={ranges} />
      );
    }

    render() {
      const {
        open,
        startDate,
        endDate,
      } = this.state;

      const dateRange = this.getDateRange();
      const selectedItem = {label: startDate.format('YYYY年MM月D日') + '~' + endDate.format('YYYY年MM月D日')};

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
