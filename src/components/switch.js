import React, {Component} from 'react';
import Switch from '../../components/switch';
import Section from '../../components/section';


class SwitchTest extends Component {
  state = {
    switch_1: true,
    switch_2: false,
    switch_3: true,
  };

  handleChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
  };

  render() {
    return (
      <Section title="转换开关">
        <Switch
          checked={this.state.switch_1}
          label="微信提醒"
          onChange={this.handleChange.bind(this, 'switch_1')}
        />
        <Switch
          checked={this.state.switch_2}
          label="微信提醒"
          onChange={this.handleChange.bind(this, 'switch_2')}
        />
        <Switch
          checked={this.state.switch_3}
          disabled
          label="禁止"
          onChange={this.handleChange.bind(this, 'switch_3')}
        />
      </Section>
    );
  }
}

export default SwitchTest;
