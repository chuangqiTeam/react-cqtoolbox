## 提示框(Tooltip)
简单的文字提示气泡框。

### 例子

```JSX
import React, {Component} from 'react';
import Tooltip from 'react-cqtoolbox/lib/tooltip';
import Button from 'react-cqtoolbox/lib/button';
import Section from 'react-cqtoolbox/lib/section';

const TooltipButton = Tooltip(Button);

class TooltipTest extends Component {

  render() {

    return (
      <Section title="提示框">
        <TooltipButton placement="left" label='提示' tooltip='我是提示框' />
        <TooltipButton label='提示' tooltip='我是提示框' />
        <TooltipButton placement="bottom" label='提示' tooltip='我是提示框' />
        <TooltipButton placement="topLeft" label='提示' tooltip='我是提示框' />
        <TooltipButton placement="right" label='提示' tooltip='我是提示框' />
      </Section>
    )
  }
}

export default TooltipTest;
```

### 属性(Props)

值           | 值类型                | 默认      | 描述
:---------- | :----------------- | :------ | :---------------------------------------------------------------------------------------------------------------
`action`    | `String`           | `hover` | `触发行为，可选 hover/click`
`placement` | `String`           | `top`   | `气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom`
`className` | `String`           |         | `tooltip样式类`
`tooltip`   | `String` or `Node` |         | `浮层子元素`
`theme`     | `Object`           |         | `添加自定义主题`

### 主题(Theme)

Name      | Description
:-------- | :----------
`tooltip`     | `提示框(根类)`
`tooltipInner` | `提示框内容`
`tooltipArrow`  | `提示框箭头`
`popup`   | `popup浮层样式`