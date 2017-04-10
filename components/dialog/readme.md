## 对话框(Dialog)

Dialog组件默认定义了普通对话框、验证框、成功框、警告框和错误框五种对话框。

### 例子

```JSX
import Dialog from 'react-cqtoolbox/lib/components/Dialog';

class DialogTest extends React.Component {
  state = {
    active: false,
  };

  handleDialog = () => {
    this.setState({active: !this.state.active});
  }

  handleConfirm = () => {
    Dialog.confirm({
      content: '是否删除',
      onConfirm: () => {
        console.log('confirm...');
      },
      onCancel: () => {
        console.log('cancel...');
      }
    });
  }

  handleSuccess = () => {
    Dialog.success({
      content: '恭喜你成功!',
      onConfirm: () => {
        console.log('confirm...');
      },
    });
  }
  handleWarning = () => {
    Dialog.warning({
      content: '警告!',
    });
  }

  handleError = () => {
    Dialog.error({
      content: '服务器出错!',
    });
  }

  actions = [
    { label: "取消", onClick: this.handleDialog },
    { label: "确定", onClick: this.handleDialog }
  ];

  render () {
    return (
      <Section title="对话框">
        <div>
          <Button label='对话框' onClick={this.handleDialog} />
          <Button label='验证框' onClick={this.handleConfirm} />
          <Button label='成功框' onClick={this.handleSuccess} />
          <Button label='警告框' onClick={this.handleWarning} />
          <Button label='错误框' onClick={this.handleError} />


          <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleDialog}
            onOverlayClick={this.handleDialog}
            title='对话框标题'>
            <p>在这里您可以添加任意内容。像Pickers这样的组件现在使用对话框。</p>
          </Dialog>
        </div>
      </Section>
    );
  }
}
```

### 属性

| 属性名             | 类型                         | 默认值       | 描述|
|:------------------|:----------------------------|:------------|:------------------|
| `actions`         | `Array`                     | `[]`          | 对象数组[{className,label,children}].允许随意组合，定义对话框的按钮导航区域，添加一个属性元素，对话框添加一个导航按钮，建议使用label元素添加导航按钮.|
| `title`           | `node`                      |             | 指定Dialog对话框标题内容.|
| `active`          | `Boolean`                   | `false`     | 指定Dialog对话框的展示与隐藏.|
| `children`        | `node`                      |             | 用于指定Dialog组件元素开始标签和结束标签之间的内容，不建议使用.|
| `className`       | `string`                    |             | 给Dialog组件元素添加class属性值. |
| `onEscKeyDown`    | `func`                      |             | 指定Dialog对话框，点击取消导航按钮的执行的回调函数. |
| `onOverlayClick`  | `func`                      |             | 指定Dialog对话框，点击确认导航按钮的执行的回调函数. |
| `theme`           | `特定形状的参数对象`           |             | 用于个性化设置Dialog对话框，详情请查阅下文中的Theme对象属性. |
| `type`            | `'small','normal','large','fullscreen'`   |   `normal`        | 指定Dialog组件元素的大小，默认值是normal. |


### 方法

| 方法名             | 类型                         | 描述|
|:------------------|:----------------------------|:------------------|
| `Dialog.confirm`  | `Function`                  | 定义验证框点击确认和取消导航按钮执行的回调函数.|
| `Dialog.error`    | `Function`                  | 定义错误框点击导航按钮执行的回调函数.|
| `Dialog.warning`  | `Function`                  | 定义警告框点击导航按钮执行的回调函数.|
| `Dialog.success`  | `Function`                  | 定义成功框点击导航按钮执行的回到函数.|



### Theme对象

| 属性名          | 描述|
|:---------------|:-----------|
| `active`       | 用于指定自定义对话框的是否隐藏.|
| `body`         | 用于设定自定义对话框的body样式.|
| `button`       | 用于指定自定义对话框的button样式.|
| `dialog`       | 用于指定自定义对话框的dialog样式.|
| `navigation`   | 用于指定自定义对话框的navigation样式.|
| `overlay`      | 用于覆盖组件的根元素.|
| `title`        | 用于指定自定义对话框的title样式.|
| `wrapper`      | 用于指定自定义对话框的wrapper样式.|
