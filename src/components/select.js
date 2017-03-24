import React, {Component} from 'react';
import {Select, CascadeSelect} from '../../components/select';

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

    const cascadeSelectData = {
      value: 1,
      data: [{
        value: 1,
        label: '选项一',
      }, {
        value: 2,
        label: '选项二',
        children: [{
          value: 3,
          label: '选项三',
        }, {
          value: 4,
          label: '选项四',
        }, {
          value: 5,
          label: '选项五',
        }]
      }, {
        value: 6,
        label: '选项六',
      }],
      onChange: console.log.bind(console),
    };

    return (
      <section>
        <h5>下拉框</h5>

        <Select {...selectData} />
        <CascadeSelect {...cascadeSelectData} />
      </section>
    )
  }
}

export default SelectTest;
