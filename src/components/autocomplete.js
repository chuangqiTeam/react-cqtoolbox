import React, {Component} from 'react';
import AutoComplete from '../../components/autocomplete';
import Input from '../../components/input';

class AutoCompleteTest extends Component {
  state = {
    dataSource1: [],
    dataSource2: [],
  }

  onChange = (name) => (value) => {
    this.setState({
      [name]: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource1, dataSource2 } = this.state;

    return (
      <section>
        <h5>AutoComplete自动完成</h5>

        <div>
          <AutoComplete
            dataSource={dataSource1}
            onChange={this.onChange('dataSource1')} />
        </div>

        <div>
          <AutoComplete
            dataSource={dataSource2}
            onChange={this.onChange('dataSource2')}>
            <Input prefix="search" suffix="close-circle" />
          </AutoComplete>
        </div>
      </section>
    )
  }
}

export default AutoCompleteTest;
