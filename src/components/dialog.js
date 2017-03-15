import Dialog from '../../components/dialog';
import React from 'react';
import { Button } from '../../components/button';

class DialogTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  actions = [
    { label: "取消", onClick: this.handleToggle },
    { label: "确定", onClick: this.handleToggle }
  ];

  render () {
    return (
      <section>
        <h5>对话框</h5>
        <div>
          <Button label='显示对话框' onClick={this.handleToggle} />
          <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title='对话框标题'
          >
            <p>在这里您可以添加任意内容。像Pickers这样的组件现在使用对话框。</p>
          </Dialog>
        </div>
      </section>
    );
  }
}

export default DialogTest;
