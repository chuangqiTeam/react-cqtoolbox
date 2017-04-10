# react-cqtoolbox

`react-cqtoolbox` 是针对于cqaso产品场景开发的一系列的pc端react组件集。
包括的场景有：后台管理系统，CQASO，TOPASM操作复杂的PC网站。



## 特性

- 它由[CSS Modules](https://github.com/css-modules/css-modules)提供动力，并与您的Webpack工作流程和谐融合。
- 它的样式由Postcss预处理。

## 安装

```
npm install react-cqtoolbox --save
```

## 开发环境

- 需要 `CSS Modules`的样式开发环境
- 需要postcss的相关插件配置

例如：

```javascript
{
    test: /\.css$/,
    include: [
      /node_modules/
    ],
    loaders: ['style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss'],
  }
```

```javascript
      postcss: function (webpack) {
        return [
          require('postcss-smart-import')({
            addDependencyTo: webpack
          }),
          require('postcss-mixins')({mixins}),
          require('postcss-cssnext')({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9',
            ]
          }),
          require('postcss-nested')(),
        ];
      },
```

webpack配置请参考[这里](https://github.com/lanjingling0510/react-babel-webpack-kit)

## 用法
下面是简单的例子，以按钮为例：

```javascript
import React from 'react';
import Button from 'react-cqtoolbox/lib/button';

ReactDOM.render(
  <Button label="Hello World!" />,
  document.getElementById('app')
);
```

## 自定义组件

每个组件接受一个主题`theme`属性，旨在提供一个CSS模块导入对象，组件将使用该对象将本地类名分配给其DOM节点。所以如果你想自定义组件，你只需要提供一个主题`theme`对象与适当的类名映射，从而修改默认样式。

如果组件已经注入了一个主题，那么您传递的属性将与注入的属性合并。

这样，您可以向特定组件的节点添加类名，并使用它们来添加或覆盖样式。例如，如果要自定义Input背景为红色：

```css
/* customInput.css */
.input {
  background: red;
}
```

```jsx
import React from 'react';

import Input from 'react-cqtoolbox/lib/input';
import theme from './customInput.css';


const CustomInput = (props) => (
  <Input {...props} theme={theme} />
);

export default CustomInput;

```

优点：通过类覆盖的方式修改样式更加灵活自如。

### 为什么选用CSS Modules？

CSS Modules 对CSS中的class名都做了处理，使用对象来保存原class和混淆后的class的对应关系。

- 所有的样式都是局部化的，解决了命名冲突和全局污染的问题。
- class名的生成规则配置灵活，可以以此来压缩class名。
- 只引用组件的JavaScript，就可以搞定组件的javascript和CSS。


## 参考项目

- [react-toolbox](http://react-toolbox.com/)
- [antd](https://ant.design)
