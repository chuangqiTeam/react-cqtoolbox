## 字体图标（FontIcon）

Font Icon默认使用阿里的[Iconfont](http://www.iconfont.cn/plus/collections/detail?cid=790)字体库。

### 例子

	import { FontIcon } from 'react-rainie-toolbox/lib/font_icon';
	const FontIconTest = () => (
	<div>
    	<span>图标文字水平对齐</span>
    	<FontIcon value="github" />
    	<FontIcon value="minus-square" alt="explore icon" spin="true" />
    	<FontIcon value="question-circle" alt="zoom icon" className="word" />
    	<FontIcon value="loading spin" />
    	<FontIcon value="area-chart" />
	</div>);

### 属性

| 属性名             | 属性名                 | 默认值       | 描述|
|:------------------|:----------------------|:------------|:------------------|
| `alt`             | `String`              | `''`        | 用于给<FontIcon/>组件元素设置aria-label属性的文本内容.|
| `children`        | `node`                |             | 用于指定<FontIcon/>组件元素，开始标签和结束标签之内的文本内容.|
| `className`       | `String`              | `''`        | 给<FontIcon/>组件元素设置一个class属性名.|
| `theme`           | `Object`              |             | 更改图标字体库，定义属于自己的图标字体颜色样式，让你的图标文字更具个性化.|
| `value`           | `String`              |             | 改变字体图标的value值，跟图标字体库一一对应. |
| `spin`            | `Boolean`             | `false`     | 设置图标字体的动画，如果值为true，图标字体拥有顺时针旋转动画. |
