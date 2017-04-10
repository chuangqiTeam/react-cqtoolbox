## 多选框(Checkbox)



### 属性(Props)

值              | 值类型        | 默认      | 描述
:------------- | :--------- | :------ | :--------
`checked`      | `Boolean`  | `false` | `是否选中`
`disabled`     | `Boolean`  | `false` | `禁止选中`
`label`        | `String`   |         | `label标签`
`name`         | `String`   |         | `input名字`
`onChange`     | `Function` |         | `切换后的回调`
`onMouseEnter` | `Function` |         | `鼠标进入`
`onMouseLeave` | `Function` |         | `鼠标离开`
`className`    | `string`   |         | `根元素样式类`
`children`     | `Node`     |         | `子元素`
`theme`        | `Object`   |         | `添加自定义主题`

### 主题(Theme)

Name       | Description
:--------- | :----------
`field`    | `多选框(根类)`
`disabled` | `禁止(根类)`
`input`    | `input元素`
`ripple`   | `波纹样式`
`text`     | `label文字`
