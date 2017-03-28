# Button
***

[cqaso](http://cqaso.com/) Button组件在html按钮模型的基础之上，重新对按钮表单元素进行审视和设计，它在包含文字，图标字体，颜色主题，行为样式之外，添加**水波纹过渡动画**，额外让按钮的行为样式在页面展示中别具一格。让我们一起来学习cqaso Button组件吧。

	import { Button } from '../../components/button';
	const ButtonTest = () => (
	<div>
    	<Button
      	icon="book"
      	label="书签"
      	className="coco"
      	iconSpin
      	onRippleEnded={rippleEnded} />

    	<Button
      	icon="book"
      	label="书签"
      	primary
      	onRippleEnded={rippleEnded} />

    	<Button
      	icon="book"
      	label="书签"
      	raised />

    	<Button
      	icon="book"
      	label="书签"
      	primary />

    	<Button
      	icon="book"
      	label="书签"
      	type="text"
      	raised
      	accent />

    	<Button
      	icon="loading"
      	iconSpin
      	label="Loading"
      	raised
      	primary
      	rippleMultiple={false}
      	onRippleEnded={rippleEnded} />
    	<Button icon="plus" floating />
    	<Button icon="plus" floating primary />
    	<Button icon="plus" floating accent />
    	<Button icon="plus" floating primary disabled />
    	<Button icon="plus" floating accent mini />
    </div>
    );

## 属性

| 属性名             | 属性名                 | 默认值       | 描述|
|:------------------|:----------------------|:------------|:------------------|
| `accent`          | `Boolean`             | `false`     | Theme对象属性中的一员，指定按钮元素的字体以及边框的强调色，颜色值为rgb(255, 64, 129).|
| `children`        | `node`                | `''`        | 指定Button元素框内包含的内容,若Button元素还设置label属性，则children内容跟在label内容的后面.|
| `className`       | `String`              | `''`        | 给Button元素设置一个class属性名.|
| `disabled`        | `Boolean`             | `‘’`        | 如果给Button元素设置该属性，Button元素丧失所有样式，成为不可编辑元素.|
| `flat`            | `Boolean`             | `false`     | 如果设置该属性，Button元素会拥有扁平的外形效果. |
| `floating`        | `Boolean`             | `false`     | 如果设置该属性，Button元素会拥有圆圈的外形效果. |
| `href`            | `String`              |             | 给Button元素指定一个href链接属性，并且<button></button>元素会被编译成<a></a>元素. |
| `icon`            | `String` or `Element` |             | 指定Button元素的icon值（icon的值可以是描述图标字体的元素） |
| `iconSpin`        | `Boolean`             |             | 如果Button元素设置了icon属性的前提之下，设置该属性，icon图标会顺时针动态旋转. |
| `label`           | `String`              |             | 指定Buttton元素的标签内容|
| `mini`            | `Boolean`             | `false`     | 用于设置了floating属性的Button元素，如果为true，Button元素会显的更小一点.|
| `neutral`         | `Boolean`             | `true`      | 用于为button元素设置中立色，如果为true，Button元素会覆盖掉其他任何主题色调.|
| `onMouseEnter`    | `Function`            |             | 指定鼠标进入Button元素区域的钩子函数.|
| `onMouseLeave`    | `Function`            |             | 指定鼠标离开Button元素区域的钩子函数.|
| `onMouseUp`       | `Function`            |             | 指定在Button元素区域释放鼠标的钩子函数.|
| `primary`         | `Boolean`             | `false`     | Theme对象属性中的一员，指定按钮元素的字体以及边框的初始色，颜色值为rgb(0, 188, 212).|
| `raised`          | `Boolean`             | `false`     | 如果为true，Button元素的字体元素与Button元素的背景色对调. |
| `theme`           | `Object`              |             | theme对象属性，用于对Button元素的样式颜色属性集中设置.|
| `type`            | `String`              | `button`    | 用于设置Button元素的表单类型|

注意：***theme***属性可对Button元素的样式颜色集中设置，Button元素的某些属性的应用具有顺序性和对立性。

## Theme对象属性

| 属性名          | 描述|
|:---------------|:-----------|
| `accent`       | 指定按钮元素的字体以及边框的强调色，颜色值为rgb(255, 64, 129).|
| `button`       | 用于根元素是按钮的元素|
| `flat`         | 如果设置该属性，Button元素会拥有扁平的外形效果.|
| `floating`     | 如果设置该属性，Button元素会拥有圆圈的外形效果.|
| `icon`         | 指定Button元素的icon值（icon的值可以是描述图标字体的元素).|
| `mini`         | 用于设置了floating属性的Button元素，如果为true，Button元素会显的更小一点.|
| `neutral`      | 用于为button元素设置中立色，如果为true，Button元素会覆盖掉其他任何主题色调.|
| `primary`      | Theme对象属性中的一员，指定按钮元素的字体以及边框的初始色，颜色值为rgb(0, 188, 212).|
| `raised`       | 如果为true，Button元素的字体元素与Button元素的背景色对调.|
| `rippleWrapper`| 用于水波纹元素|
| `toggle`       | 用于切换元素的根元素|
