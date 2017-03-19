import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';

const TooltipButton = Tooltip(Button);

class TooltipTest extends Component {

  render() {

    return (
      <section>
        <h5>提示框</h5>

        <div>
          <TooltipButton
            label='提示'
            raised
            primary
            tooltip='我是提示框' />
        </div>

        <div>
          <TooltipButton
            placement="bottom"
            label='提示'
            raised
            primary
            tooltip='我是提示框' />
        </div>

        <div>
          <TooltipButton
            placement="right"
            label='提示'
            raised
            primary
            tooltip='我是提示框' />
        </div>

        <div>
          <TooltipButton
            placement="left"
            label='提示'
            raised
            primary
            tooltip='我是提示框' />
        </div>
      </section>
    )
  }
}

export default TooltipTest;
