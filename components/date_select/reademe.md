# 时间选择器

[时间选择器](https://github.com/lockyang/react-cqtoolbox/tree/master/components/date_select)用于选择单点时间或时间范围

<!-- example -->
```jsx
//DateSelect 单点选择器
//DateRangeSelect 范围选择器
import {DateSelect, DateRangeSelect} from '../../components/date_select';
import moment from 'moment';

class DatepickerTest extends React.Component {
  state = {
    value: moment().add(-30, 'days')
  }

  handleSelect = (value) => {
    this.setState({ value });
  }

  render () {
    return (
      <div>
        <DateSelect data={this.state.value} onChange={this.handleSelect} />
        <DateRangeSelect />
      </div>
    )
  }
}

export default DatepickerTest;

```


## (DateSelect)Properties

| 值            | 值类型        | 默认     | 描述|
|:-----         |:-----       |:-----         |:-----|
| `date`        | `Object`    |               | `接受一个moment对象`             |
| `minDate`     | `Object`    | `2016-03-01`  | `最小选择日期`                   |
| `maxDate`     | `Object`    |               | `最大选择日期`                   |
| `onChange`    | `Function`  |               | `当值变化触发onChange函数`       |



## (DateRangeSelect)Properties

| 值            | 值类型        | 默认     | 描述|
|:-----         |:-----       |:-----         |:-----|
| `startDate`   | `Object`    |               | `DateRangeSelect独有，起始日期,接受一个moment对象`  |
| `endDate`     | `Object`    |               | `DateRangeSelect独有，结束日期,接受一个moment对象`  |
| `minDate`     | `Object`    | `2016-03-01`  | `最小选择日期,接受一个moment对象`                   |
| `maxDate`     | `Object`    |               | `最大选择日期,接受一个moment对象`                   |
| `onChange`    | `Function`  |               | `当值变化触发onChange函数`                         |
