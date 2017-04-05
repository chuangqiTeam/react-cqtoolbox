## 警告提示（Alert）

[警告提示](https://chuangqiteam.github.io/react-cqtoolbox/)当某个页面需要向用户显示警告的信息时。

### 例子
<!-- example -->
```jsx
import React, {Component} from 'react';
import Alert from 'react-cqtoolbox/lib/alert';
import Button from 'react-cqtoolbox/lib/button';
import Section from 'react-cqtoolbox/lib/section';

class AlertTest extends Component {
  render() {

    return (
      <Section title="警告提示">
        <Alert message={<div> 想要提升排名到TOP3？请联系我们 <Button className="margin-left" primary raised label="立即提升" /></div>}/>
        <br/>
        <Alert message="success提示"/>
        <br/>
        <Alert showIcon={false} message="success提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="info" message="info提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="info" message="info提示"/>
        <br/>
        <Alert type="info" showIcon={false} message="info成功提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="warning" message="warning提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="warning" message="warning提示"/>
        <br/>
        <Alert type="warning" showIcon={false} className="margin-bottom" message="info成功提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="error" message="error提示" description="想要提升排名到TOP3？请联系我们"/>
        <br/>
        <Alert type="error" message="error提示"/>
        <br/>
        <Alert type="error" showIcon={false} message="info成功提示" description="想要提升排名到TOP3？请联系我们"/>
      </Section>
    );
  }
}

export default AlertTest;

```
## Alert组件

### 属性(Props)

| 值            | 值类型      | 默认     | 描述|
|:-----         |:-----     |:-----         |:-----|
| `type`        | `String`      | `success` | `success、info、warning、error四种样式,默认success`    |
| `message`     | `Node|String` |           | `提示标题,可在标题中插入节点`       |
| `description` | `Node|String` |           | `提示描述,可在描述中插入节点,`      |
| `className`   | `String`      |           | `添加类`                      |
| `showIcon`    | `Boolean`     | `true`    | `是否显示提示图标,默认显示`       |
| `closable`    | `Boolean`     | `true`    | `提示是否可关闭,默认可关闭`       |
| `theme`       | `Object`      |           | `添加自定义主题`                |



### 主题(Theme)

| Name       | Description|
|:-----------|:-----------|
| `alert`         | 根类 作用于整个Alert组件.|
| `hasDscription` | 具有描述内容.|
| `noIcon`        | 没有图标.|
| `floating`      | 当提示悬浮时.|
| `success`       | 成功提示主题.|
| `info`          | 信息提示主题.|
| `warning`       | 警告提示主题.|
| `error`         | 错误提示主题.|
| `alertInner`    | 提示内容.|
| `message`       | 标题.|
| `description`   | 描述.|
| `icon`          | 提示图标.|
| `closeIcon`     | 关闭图标.|
| `anim`          | 提示框进出动画.|


