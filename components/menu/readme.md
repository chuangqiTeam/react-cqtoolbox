## 菜单(Menu)

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。


### 例子
<!-- example -->
```jsx
import React, {Component} from 'react';
import {Menu, MenuItem} from 'react-cqtoolbox/lib/menu';
import Section from 'react-cqtoolbox/lib/section';

class MenuTest extends Component {
  render() {

    return (
      <Section title="菜单">
		 <Menu mode="vertical">
           <MenuItem>实时排名</MenuItem>
           <MenuItem>基本信息</MenuItem>
           <MenuItem>版本记录</MenuItem>
        </Menu>
      </Section>
    );
  }
}

export default MenuTest;

```

### 属性(Props)

| 值            | 值类型      | 默认     | 描述|
|:-----         |:-----     |:-----         |:-----|
| `mode`        | `String`      | `inline` | `inline、vertical、horizontal三种选项`    |
| `className`   | `String`      |           | `添加类`                      |
| `children`    | `Object`     |     | `子元素`       |
| `theme`       | `Object`      |           | `添加自定义主题`                |



### 主题(Theme)

| Name       | Description|
|:-----------|:-----------|
| `menu`         | 根类 作用于整个Menu组件.|
| `inline` | 内嵌模式 |
| `vertical`        | 垂直模式 |
| `horizontal`      | 水平模式 |


## 子菜单(SubMenu)

子菜单嵌套在Menu组件内部，可以展示和隐藏

### 例子
<!-- example -->
```jsx
import React, {Component} from 'react';
import {Menu, SubMenu, MenuItem} from 'react-cqtoolbox/lib/menu';
import Section from 'react-cqtoolbox/lib/section';

class MenuTest extends Component {
  render() {

    return (
      <Section title="菜单">
		 <Menu mode="vertical">
          <SubMenu icon="user" title="导航一">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
          </SubMenu>
          <SubMenu icon="team" title="导航二">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
          </SubMenu>
          <SubMenu icon="file" title="导航三">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
          </SubMenu>
        </Menu>
      </Section>
    );
  }
}

export default MenuTest;

```

### 属性(Props)

| 值            | 值类型      | 默认     | 描述|
|:-----         |:-----     |:-----         |:-----|
| `title`     | `String`      |  | `子菜单标题 `  |
| `placement` |   `String`    | `left` | `left、middle、right三个选项，表示mode为horizontal模式下，内嵌子菜单的位置`  |
| `mode`        | `String`      | `inline` | `inline、vertical、horizontal三种选项`    |
| `className`   | `String`      |           | `添加类`                      |
| `onTitleClick`   | `Function`      |           | `点击子菜单标题回调函数`                 |
| `open`   | `Boolean`      |      `false `    | `是否展示子菜单`                 |
| `children`    | `Object`     |     | `子元素`       |
| `theme`       | `Object`      |           | `添加自定义主题`                |



### 主题(Theme)

| Name       | Description|
|:-----------|:-----------|
| `subMenu`         | `子菜单根类`|
| `subMenuItem`         | `子菜单标题项`|
| `popupMenu`         | `子菜单`|
| `caption`         | `子菜单标题文字`|
| `icon`        | `子菜单标题图标` |
| `arrow`      | `子菜单标题箭头`|


## 菜单项(MenuItem)

### 属性(Props)

| 值            | 值类型      | 默认     | 描述|
|:-----         |:-----     |:-----         |:-----|
| `icon`     | `String`      |  | `图标 `  |
| `value` |   `String`    |  | `值`  |
| `disabled`        | `Boolean`   | false  | `是否禁止`    |
| `selected`        | `Boolean`    | false | `是否被选择`    |
| `className`   | `String`      |           | `添加类`                      |
| `onClick`   | `Function`      |           | `点击菜单项`                 |
| `children`    | `Object`     |     | `子元素`       |
| `theme`       | `Object`      |           | `添加自定义主题`                |



### 主题(Theme)

| Name       | Description|
|:-----------|:-----------|
| `menuItem`         | `菜单项`|
| `caption`         | `菜单项文字`|
| `disabled`         | `禁止`|
| `icon`         | `菜单项图标`|
| `selected`        | `被选择` |
