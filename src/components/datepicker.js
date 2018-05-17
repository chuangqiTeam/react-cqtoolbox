import React from 'react';
import {DateSelect, DateRangeSelect} from '../../components/date_select';
import Section from '../../components/section';

class DatepickerTest extends React.Component {
  state = {
    value: new Date(),
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
