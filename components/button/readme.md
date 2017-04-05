## 按钮(Button)

Button组件包含文字，图标字体，颜色主题，行为触发。

### 例子

	import { Button } from 'react-cqtoolbox/lib/button';
	const ButtonTest = () => (
	<div>
    	<Button
      		icon="book"
      		label="书签"
      		accent
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
      		raised
      		primary />
    	<Button
      		icon="book"
      		label="书签"
      		raised
      		accent />
    	<Button
      		icon="plus"
      		label="添加"
      		disabled />
    	<Button
      		icon="plus"
      		label="添加"
      		raised
      		disabled />
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
	</div>);

### 属性

| 属性名             | 属性名                       | 默认值       | 描述|
|:------------------|:----------------------------|:------------|:------------------|
| `accent`          | `Boolean`                   | `false`     | Theme对象属性中的一员，指定按钮元素的字体以及边框的强调色.|
| `children`        | `node`                      |             | 指定Button组件元素框内包含的内容,若Button组件元素还设置label属性，则children内容跟在label内容的后面.|
| `className`       | `String`                    |             | 给Button组件元素设置一个class属性名.|
| `disabled`        | `Boolean`                   |             | 如果给Button组件元素设置该属性，Button组件元素丧失所有样式，成为不可编辑元素.|
| `flat`            | `Boolean`                   | `false`     | 如果设置该属性，Button组件元素会拥有扁平的外形效果. |
| `floating`        | `Boolean`                   | `false`     | 如果设置该属性，Button组件元素会拥有圆圈的外形效果. |
| `href`            | `String`                    |             | 给Button组件元素指定一个href链接属性，并且<button></button>元素会被编译成<a></a>元素. |
| `size`            | `'small','normal','large'`  | `normal`    | 指定Button组件元素的大小，默认值是normal. |
| `icon`            | `String` or `Element`       |             | 指定Button组件元素的icon值（icon的值可以是描述图标字体的元素） |
| `iconSpin`        | `Boolean`                   |             | 如果Button组件元素设置了icon属性的前提之下，设置该属性，icon图标会顺时针动态旋转. |
| `label`           | `String`                    |             | 指定Buttton组件元素的标签内容|
| `mini`            | `Boolean`                   | `false`     | 用于设置了floating属性的Button组件元素，如果为true，Button元素会显的更小一点.|
| `neutral`         | `Boolean`                   | `true`      | 用于为button组件元素设置中立色，如果为true，Button组件元素会覆盖掉其他任何主题色调.|
| `onMouseEnter`    | `Function`                  |             | 指定鼠标进入Button组件元素区域的钩子函数.|
| `onMouseLeave`    | `Function`                  |             | 指定鼠标离开Button组件元素区域的钩子函数.|
| `onMouseUp`       | `Function`                  |             | 指定在Button组件元素区域释放鼠标的钩子函数.|
| `primary`         | `Boolean`                   | `false`     | Theme对象属性中的一员，指定按钮元素的字体以及边框的初始色.|
| `raised`          | `Boolean`                   | `false`     | 如果为true，Button组件元素的字体元素与Button组件元素的背景色对调. |
| `theme`           | `Object`                    |             | theme对象属性，用于对Button组件元素的样式颜色属性集中设置.|
| `type`            | `String`                    | `button`    | 用于设置Button组件元素的表单类型|


### Theme对象

| 属性名          | 描述|
|:---------------|:-----------|
| `accent`       | 指定按钮元素的字体以及边框的强调色，颜色值为rgb(255, 64, 129).|
| `button`       | 用于根元素是按钮的元素|
| `flat`         | 如果设置该属性，Button组件元素会拥有扁平的外形效果.|
| `floating`     | 如果设置该属性，Button组件元素会拥有圆圈的外形效果.|
| `icon`         | 指定Button组件元素的icon值（icon的值可以是描述图标字体的元素).|
| `mini`         | 用于设置了floating属性的Button组件元素，如果为true，Button组价元素会显的更小一点.|
| `neutral`      | 用于为button组件元素设置中立色，如果为true，Button组件元素会覆盖掉其他任何主题色调.|
| `primary`      | Theme对象属性中的一员，指定按钮元素的字体以及边框的初始色，颜色值为rgb(0, 188, 212).|
| `raised`       | 如果为true，Button组件元素的字体元素与Button组件元素的背景色对调.|
| `rippleWrapper`| 用于水波纹元素|
| `toggle`       | 用于切换元素的根元素|

***

## 按钮组(ButtonGroup)

ButtonGroup组件在Button组件元素之上对Button组件元素进行包装和组合。

	<!-- example -->
	import { ButtonGroup } from 'react-cqtoolbox/lib/button';
	const ButtonTest = () => (
		<div className="margin-bottom">
      		<ButtonGroup>
        		<Button label="书签" onRippleEnded={rippleEnded}/>
        		<Button label="书签" onRippleEnded={rippleEnded}/>
        		<Button label="书签" onRippleEnded={rippleEnded}/>
      		</ButtonGroup>
    	</div>

    	<div className="margin-bottom">
      		<ButtonGroup size="small">
        		<Button primary raised label="书签" onRippleEnded={rippleEnded}/>
        		<Button primary label="书签" onRippleEnded={rippleEnded}/>
        		<Button primary label="书签" onRippleEnded={rippleEnded}/>
      		</ButtonGroup>
    	</div>
	);

### 属性

| 属性名             | 属性名                                 | 默认值       | 描述|
|:------------------|:--------------------------------------|:------------|:------------------|
| `children`        | `node`                                |             | 用于指定ButtonGroup组件元素开始标签与结束标签中的文本内容，但是目前无效.|
| `size`            | `'small','normal','large'`            | `normal`    | 指定ButtonGroup组件元素的大小，默认值是normal.|
| `theme`           | `特定形状的参数对象{buttonGroup:String}` |             | 定义属于自己个性的ButtonGroup组件颜色样式.|
