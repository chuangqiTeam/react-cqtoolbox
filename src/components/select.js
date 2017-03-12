import React, {Component} from 'react';
import SelectInput from '../../components/select_input';
import Trigger from '../../components/trigger';

const selectedItem = {
  label: '微信',
  value: '微信',
};


class SelectTest extends Component {
  state = {
    isActive: false,
  }

  onClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <section>
        <h5>下拉框</h5>

        <div>
          <Trigger
            popup={<div>hehe</div>}>
            <SelectInput
              isActive={this.state.isActive}
              onClick={this.onClick}
              selectedItem={selectedItem} />
          </Trigger>
        </div>

      </section>
    )
  }
}

export default SelectTest;
