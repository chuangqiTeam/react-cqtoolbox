import React, {Component} from 'react';
import Select from '../../components/select';

class SelectTest extends Component {

  render() {
    const selectData = {
      value: 1,
      data: [{
        value: 1,
        label: '选项一',
      }, {
        value: 2,
        label: '选项二',
      }, {
        value: 3,
        label: '选项三',
      }],
      onChange: console.log.bind(console),
    };

    return (
      <section>
        <h5>下拉框</h5>

        <Select key="select" {...selectData} />

      </section>
    )
  }
}

export default SelectTest;
