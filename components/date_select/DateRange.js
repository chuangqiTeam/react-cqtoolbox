import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DefinedRange, DateRange } from 'react-date-range';
import classnames from 'classnames';
import theme from './theme.css';

class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedRange: [0, 0],
    };
  }

  handleDefinedChange = (...param) => {
    const onChange = this.props.onChange;
    onChange(...param);
    this.props.onTwoStepChange();
  }

  handleRangeFocusChange = (focusedRange) => {
    const onTwoStepChange = this.props.onTwoStepChange;
    if (focusedRange[1] === 0) {
      onTwoStepChange();
    }

    this.setState({ focusedRange })
  }

  render() {
    const { focusedRange } = this.state;

    return (
      <div className={classnames(theme.DangePicker, this.props.className)}>
        <DefinedRange
          focusedRange={focusedRange}
          onPreviewChange={value => this.dateRange.updatePreview(value)}
          {...this.props}
          onChange={this.handleDefinedChange}
          range={this.props.ranges[focusedRange[0]]}
          className={undefined}
        />
        <DateRange
          onRangeFocusChange={this.handleRangeFocusChange}
          focusedRange={focusedRange}
          {...this.props}
          ref={t => (this.dateRange = t)}
          className={undefined}
        />
      </div>
    );
  }
}

DateRangePicker.defaultProps = {};

DateRangePicker.propTypes = {
  ...DateRange.propTypes,
  ...DefinedRange.propTypes,
  className: PropTypes.string,
  onTwoStepChange: PropTypes.func,
};

export default DateRangePicker;
