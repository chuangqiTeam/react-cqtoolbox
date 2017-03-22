import React, { Component, PropTypes } from 'react';
import theme from './theme.css';
import moment from 'moment';

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
      minDate: moment('2016-03-01'),
      maxDate: moment(),
      onChange: () => void 0,
    }

    constructor(props) {
      super(props);

      this.state = {
        date: 'date' in props ? props.date : moment(),
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
          lang="cn"
          date={this.state.date}
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.handleDateSelect}
          theme={this.props.theme || this.defaultTheme} />
      );
    }

    render() {
      const state = this.state;
      const calendar = this.getCalendar();
      const selectedItem = {label: state.date.format('YYYY年MM月D日')};

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={state.open}
          onPopupVisibleChange={this.handleSelectToggle}
          popup={calendar}>
          <SelectInput
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
