import React from 'react';
import {DateSelect, DateRangeSelect} from '../../components/date_select';
import Section from '../../components/section';
import moment from 'moment';

class DatepickerTest extends React.Component {
  state = {
    value: moment().add(-30, 'days'),
  }

  handleSelect = (value) => {
    this.setState({ value });
  }

  render () {
    return (
      <Section title="时间选择器">
        <DateSelect date={this.state.value} onChange={this.handleSelect} />
        <DateRangeSelect />
      </Section>
    );
  }
}

export default DatepickerTest;
