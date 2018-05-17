import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import format from 'date-fns/format';
import locale from 'react-date-range/dist/locale/zh-CN.js';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, Calendar) => {
  class DateSelect extends Component {

    static propTypes = {
      date: PropTypes.object,
      minDate: PropTypes.object,
      maxDate: PropTypes.object,
      onChange: PropTypes.func,
      theme: PropTypes.shape({
        DaySelected: PropTypes.object,
      })
    }

    static defaultProps = {
      minDate: new Date(2016, 3, 1),
      maxDate: new Date(),
      onChange: () => void 0,
    }

    constructor(props) {
      super(props);

      this.state = {
        date: 'date' in props ? props.date : new Date(),
        open: false,
      }

      this.defaultTheme = {
        DaySelected: {
          background: theme.DaySelected_background
        }
      };
    }

    componentWillReceiveProps(nextProps) {
      if ('date' in nextProps) {
        this.setState({ date: nextProps.date });
      }
    }

    handleSelectToggle = () => {
      this.setState({ open: !this.state.open });
    }

    handleDateSelect = (date) => {
      this.handleSelectToggle();

      if (!('date' in this.props)) {
        this.setState({ date });
      }

      this.props.onChange(date);
    }

    getCalendar = () => {
      const {
        minDate,
        maxDate,
      } = this.props;

      return (
        <Calendar
          locale={locale}
          date={this.state.date}
          minDate={minDate}
          maxDate={maxDate}
          color="rgb(0, 188, 212)"
          onChange={this.handleDateSelect}
          theme={this.props.theme || this.defaultTheme} />
      );
    }

    render() {
      const {
        date, // eslint-disable-line
        minDate, // eslint-disable-line
        maxDate, // eslint-disable-line
        onChange, // eslint-disable-line
        theme, // eslint-disable-line
        ...other,
      } = this.props;

      const state = this.state;
      const calendar = this.getCalendar();
      const selectedItem = {label: format(state.date, 'YYYY年MM月D日')};

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={state.open}
          onPopupVisibleChange={this.handleSelectToggle}
          popup={calendar}>
          <SelectInput
            {...other}
            selectedItem={selectedItem}
            isActive={state.open}
            onClick={this.handleSelectToggle} />
        </Trigger>
      );
    }
  }

  return DateSelect;
};

export {factory as dateSelectFactory};
