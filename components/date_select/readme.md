# 时间选择器

[时间选择器](https://github.com/lockyang/react-cqtoolbox/tree/master/components/date_select)用于选择单点时间或时间范围

## 例子
<!-- example -->
```jsx
//DateSelect 单点选择器
//DateRangeSelect 范围选择器
import {DateSelect, DateRangeSelect} from 'react-cqtoolbox/lib/date_select';
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

## DateRangeSelect组件

### 属性

| 值            | 值类型        | 默认     | 描述|
|:-----         |:-----       |:-----         |:-----|
| `startDate`   | `Object`    |               | `DateRangeSelect独有，起始日期,接受一个moment对象`  |
| `endDate`     | `Object`    |               | `DateRangeSelect独有，结束日期,接受一个moment对象`  |
| `minDate`     | `Object`    | `2016-03-01`  | `最小选择日期,接受一个moment对象`                   |
| `maxDate`     | `Object`    |               | `最大选择日期,接受一个moment对象`                   |
| `ranges`      | `Array`     |  ['今日', '昨日', '近7日', '近30日', '近三个月', '近一年']           | `可选的时间段范围`         |
| `onChange`    | `Function`  |               | `当值变化触发onChange函数`                         |
