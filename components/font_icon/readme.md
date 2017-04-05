## 字体图标（FontIcon）

[cqaso](http://cqaso.com/) Font Icon组件让图标文字更具语义和个性化，Font Icon组件并没有提供图标字体库，因为行内有更加专业的图标字体设计团队做这样的事情。Font Icon默认使用阿里的Iconfont字体库,如果您想更换字体库和使用Font Icon组件，就让我们一起来一探究竟吧。

<img alt="Button img" src="../../.github/fontIcon.png" width="100%" />


	<!-- example -->
	import { FontIcon } from 'react-cqtoolbox/lib/font_icon';
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

注意：***theme*** 属性可更改<FontIcon/>组件的图标字体库、颜色样式，更多<FontIcon/>组件元素属性的魔性，由你来发现！


#### Theme对象属性使用说明
Look here ！ 如果你想在cqaso Font Icon组件的模板之上，想要引入新的图表字体库，定义属于自己的Font Icon组件行为样式主题，Theme对象属性帮你完全搞定，让我们来通过一个例子看看吧。

<!--example-->
1. 如果你想改变现有图标字体的颜色或者图标字体库，那么在项目文件中，定义fontIconTheme.css（可定义其他文件名）文件（如果更换其他图标字体库，请引入相应的font字体库文件）。下面将图标字体颜色设置为#555eed;的例子做演示.
	<!--footIconTheme.css部分内容（覆盖react-cqtoolbox/lib/font_icon/theme.css文件内容）-->

		.icon {
    		display: inline-block;
    		font-style: normal;
    		vertical-align: baseline;
    		text-align: center;
    		text-transform: none;
    		line-height: 1;
    		text-rendering: optimizeLegibility;
    		-webkit-font-smoothing: antialiased;
    		-moz-osx-font-smoothing: grayscale;
    		color:#555eed;

    		&:before {
        		display: block;
        		font-family: "anticon";
    		}
    	}

2. 然后在Font Icon组件文件中，引入fontIconTheme.css文件，在需要设置<FontIcon/>元素中设置theme属性。

	<!--设置theme属性的例子-->

		import { FontIcon } from 'react-cqtoolbox/lib/font_icon';
		import theme from 'fontIconTheme.css';
		const ButtonTest = () => (
			<div>
				<FontIcon value="minus-square" theme={theme} alt="explore icon"  className="world"/>
    			<FontIcon value="question-circle" alt="zoom icon" />
			</div>);
3. 最后让我们一起看看效果。

	<img alt="Button img" src="../../.github/fontIconTheme.png" width="100%" />
