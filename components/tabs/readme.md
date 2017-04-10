

## 标签页(Tabs)

选项卡切换组件。

### 例子

```jsx
import React from 'react';
import {Tabs, Tab} from 'react-cqtoolbox/lib/tabs';
import Section from 'react-cqtoolbox/lib/section';

class TabsTest extends React.Component {
  state = {
    index: 1,
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleActive = () => {
    console.log('超级关键词激活了....');
  };

  render () {
    return (
      <Section title="标签页">
        <Tabs index={this.state.index} hideMode="display" onChange={this.handleTabChange}>
          <Tab label='超级关键词'><small>超级关键词内容....</small></Tab>
          <Tab label='置顶关键词' onActive={this.handleActive}><small>置顶关键词内容....</small></Tab>
          <Tab label='备注关键词'><small>备注关键词内容....</small></Tab>
          <Tab label='无效关键词' disabled><small>无效关键词...</small></Tab>
          <Tab label='隐藏关键词' hidden><small>隐藏的...</small></Tab>
        </Tabs>
      </Section>
    );
  }
}

export default TabsTest;
```

### 属性(Props)

值           | 值类型        | 默认          | 描述
:---------- | :--------- | :---------- | :----------------------------------
`hideMode`  | `String`   | `unmounted` | `display、unmounted二种选项，未选中的选项卡隐藏方式`
`className` | `String`   |             | `添加类`
`index`     | `Number`   | `0`         | `激活选项卡的索引`
`onChange`  | `Function` |             | `切换选项卡的回调函数`
`children`  | `Object`   |             | `Tab组件`
`theme`     | `Object`   |             | `添加自定义主题`

### 主题(Theme)

Name                  | Description
:-------------------- | :----------
`tabs`                | `(根类)`
`navigationContainer` | `导航容器`
`navigation`          | `导航`
`label`               | `导航标签`
`pointer`             | `导航底部条`



## 标签页项(Tab)

### 属性(Props)

值                 | 值类型        | 默认      | 描述
:---------------- | :--------- | :------ | :-----------------------
`active`          | `Boolean`  | false   | `是否激活`
`activeClassName` | `String`   |         | `激活选项卡标签类`
`className`       | `String`   |         | `添加类`
`index`           | `Number`   |         | `选项卡的索引`
`disabled`        | `Boolean`  | `false` | `是否禁止`
`hidden`          | `Boolean`  | `false` | `是否隐藏`
`label`           | `Node`     |         | `标签文本`
`onActive`        | `Function` |         | `选项卡激活回调`
`onClick`         | `Function` |         | `点击选项卡的回调函数`
`children`        | `Object`   |         | `子元素，作为TabContent组件的子组件`
`theme`           | `Object`   |         | `添加自定义主题`


### 主题(Theme)

Name       | Description
:--------- | :----------
`active`   | `激活选项卡标签样式`
`disabled` | `禁止选项卡标签样式`
`hidden`   | `隐藏选项卡标签样式`

## 标签页内容(TabContent)

### 属性(Props)

值           | 值类型       | 默认    | 描述
:---------- | :-------- | :---- | :--------
`active`    | `Boolean` | false | `是否激活`
`className` | `String`  |       | `添加类`
`tabIndex`  | `Number`  |       | `选项卡的索引`
`children`  | `Object`  |       | `子元素`
`theme`     | `Object`  |       | `添加自定义主题`


### 主题(Theme)

Name     | Description
:------- | :----------
`active` | `激活选项卡内容样式`
`tab`    | `选项卡内容样式`
