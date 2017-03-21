import React from 'react';
import Dialog from '../../components/dialog';
import { Button } from '../../components/button';

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
      content: '警告⚠️!',
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
      <section>
        <h5>对话框</h5>
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
      </section>
    );
  }
}

export default DialogTest;
