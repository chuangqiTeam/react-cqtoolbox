import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import Section from '../../components/section';

const TooltipButton = Tooltip(Button);

class TooltipTest extends Component {

  render() {

    return (
      <Section title="提示框">

        <TooltipButton placement="left" label='提示' tooltip='我是提示框' />
        <TooltipButton label='提示' tooltip='我是提示框' />
        <TooltipButton placement="bottom" label='提示' tooltip='我是提示框' />
        <TooltipButton placement="topLeft" label='提示' tooltip='我是提示框' />
        <TooltipButton placement="right" label='提示' tooltip='我是提示框' />
      </Section>
    )
  }
}

export default TooltipTest;
