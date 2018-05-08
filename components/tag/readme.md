## 标签(Tag)

### 例子

```jsx
import React, {Component} from 'react';
import Tag from 'react-rainie-toolbox/lib/tag';
import Section from 'react-rainie-toolbox/lib/section';

class TagTest extends Component {
  render() {
    return (
      <Section title="标签">
          <Tag closable label="榜单" />
          <Tag closable label="地图" />
          <Tag closable label="优酷" />
          <Tag closable label="视频" />
          <Tag closable label="漫画" />
          <Tag closable label="助手" />
      </Section>
    );
  }
}

export default TagTest;
```

### 属性(Props)

值           | 值类型        | 默认    | 描述
:---------- | :--------- | :---- | :------------
`color`     | `String`   |       | `标签颜色`
`raised`    | `Boolean`  | false | `背景，字体颜色是否相反`
`closable`  | `Boolean`  | false | `是否可以删除`
`onClose`   | `Function` |       | `删除`
`label`     | `Node`     |       | `label标签文本`
`className` | `String`   |       | `添加类`
`children`  | `Object`   |       | `子元素`
`theme`     | `Object`   |       | `添加自定义主题`

### 主题(Theme)

Name      | Description
:-------- | :----------
`tag`     | `标签(根类)`
`neutral` | `自然色调样式`
`raised`  | `相反色调样式`
`close`   | `关闭按钮样式`
