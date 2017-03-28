# 时间选择器

[时间选择器](https://github.com/lockyang/react-cqtoolbox/tree/master/components/date_select)用于选择单点时间或时间范围

<!-- example -->
```jsx
//DateSelect 单点选择器
//DateRangeSelect 范围选择器
import {DateSelect, DateRangeSelect} from '../../components/date_select';

const DatepickerTest = () => (
  <div>
    <DateSelect />
    <DateRangeSelect />
  </div>
);

export default DatepickerTest;

```


## Properties

| 值            | 值类型        | 默认     | 描述|
|:-----         |:-----       |:-----         |:-----|
| `date`        | `Object`    | `false`       |                                |
| `startDate`   | `Object`    | `false`       | `DateRangeSelect独有，起始日期`  |
| `endDate`     | `Object`    | `false`       | `DateRangeSelect独有，结束日期`  |
| `minDate`     | `Object`    | `2016-03-01`  | `最小选择日期`                   |
| `maxDate`     | `Object`    |               | `最大选择日期`                   |
| `onChange`    | `Function`  |               | `当值变化触发onChange函数`       |



## Theme

| Name     | Description|
|:---------|:-----------|
| `DaySelected_background` | 选中(起始/结束)日期背景颜色|
| `DayInRange_background`  | 选中范围内背景颜色|
| `DayInRange_color`       | 选中及选中范围日期字体颜色|
