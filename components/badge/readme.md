## 徽章数(Badge)

图标右上角的圆形徽标数字或文字。

### 例子

```jsx
import React, {Component} from 'react';
import Badge from 'react-cqtoolbox/lib/badge';
import Button from 'react-cqtoolbox/lib/button';
import Section from 'react-cqtoolbox/lib/section';

const BadgeButton = Badge(Button);

class BadgeTest extends Component {
  render() {

    return (
      <Section title="徽章数">
        <BadgeButton label='徽章数' count="0" />
        <BadgeButton label='徽章数' dot />
        <BadgeButton label='徽章数' count="100" />
        <BadgeButton label='徽章数' text="N" />
        <BadgeButton label='徽章数' text="NEW" />
      </Section>
    )
  }
}

export default BadgeTest;
```

### 属性(Props)

值               | 值类型                  | 默认    | 描述
:-------------- | :------------------- | :---- | :--------
`count`         | `Number` or `String` |       | `显示的数字`
`text`          | `Node`               |       | `显示的文本`
`dot`           | `Boolean`            | false | `是否显示圆点`
`showZero`      | `Boolean`            |       | `是否显示数字零`
`overflowCount` | `Number`             | `99`  | `显示的最大数字`
`className`     | `String`             |       | `添加类`
`theme`         | `Object`             |       | `添加自定义主题`

### 主题(Theme)

Name    | Description
:------ | :----------
`badge` | `徽章`
`count` | `数字`
`text`  | `文本`
`dot`   | `圆点`
