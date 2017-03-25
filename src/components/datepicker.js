import React from 'react';
import {DateSelect, DateRangeSelect} from '../../components/date_select';
import Section from '../../components/section';

const DatepickerTest = () => (
  <Section title="时间选择器">

    <DateSelect />
    <DateRangeSelect />
  </Section>
);

export default DatepickerTest;
