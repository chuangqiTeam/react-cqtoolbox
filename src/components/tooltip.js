import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';

const TooltipButton = Tooltip(Button);

class TooltipTest extends Component {

  render() {

    return (
      <section>
        <h5>提示框</h5>

        <TooltipButton placement="left" label='提示' raised primary tooltip='我是提示框' />
        <TooltipButton label='提示' raised primary tooltip='我是提示框' />
        <TooltipButton placement="bottom" label='提示' raised primary tooltip='我是提示框' />
        <TooltipButton placement="topLeft" label='提示' raised primary tooltip='我是提示框' />
        <TooltipButton placement="right" label='提示' raised primary tooltip='我是提示框' />
      </section>
    )
  }
}

export default TooltipTest;
