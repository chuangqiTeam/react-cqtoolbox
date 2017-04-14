import React from 'react';
import {mount} from 'enzyme';
import Autocomplete from '../../autocomplete';

const dataSource = [
  {label: 'Tom', name: 'Tom'},
  {label: 'Jack', name: 'Jack'},
  {label: 'Lizy', name: 'Lizy'},
];

describe('Autocomplete', () => {
  let props;
  let mountedAutocomplete;

  const autocomplete = () => {
    if (!mountedAutocomplete) {
      mountedAutocomplete = mount(<Autocomplete {...props}/>);
    }
    return mountedAutocomplete;
  }

  beforeEach(() => {
    props = {
      align: undefined,
      value: undefined,
      defaultValue: undefined,
      dataSource: undefined,
      onSelect: undefined,
      onChange: undefined,
      children: undefined,
      theme: undefined,
    };

    mountedAutocomplete = undefined;
  });

  //
  it('总是渲染一个Input组件', () => {
    expect(autocomplete().find('Input').length).toBeGreaterThan(0);
  });

  //
  describe('被渲染的Input组件', () => {

    it('接受onKeyDown属性', () => {
      expect(autocomplete().find('Input').props()).toHaveProperty('onKeyDown');
    });

    it('接受onKeyUp属性', () => {
      expect(autocomplete().find('Input').props()).toHaveProperty('onKeyUp');
    });

    it('当传入value，接受value属性', () => {
      props.value = '10';
      expect(autocomplete().find('Input').props()).toHaveProperty('value');
    });

    it('当不传入value，不接受value属性', () => {
      expect(autocomplete().find('Input').prop('value')).toBeUndefined();
    });

    it('当传入defaultvalue，接受defaultvalue属性', () => {
      props.defaultValue = '10';
      expect(autocomplete().find('Input').props()).toHaveProperty('defaultValue');
    });

    it('当不传入defaultvalue，不接受defaultvalue属性', () => {
      expect(autocomplete().find('Input').prop('defaultValue')).toBeUndefined();
    });
  });

  //
  describe('当设置dataSource时', () => {

    it('值为空数组，Trigger组件popupVisible为false', () => {
      props.dataSource = dataSource;
      autocomplete().setProps({dataSource: []});
      autocomplete().find('Input').first().defaultValue = 'tom';
      expect(autocomplete().find('Trigger').prop('popupVisible')).toBe(false);
    });

    it('值不为空数组，Trigger组件popupVisible为true', () => {
      props.dataSource = [];
      autocomplete().setProps({dataSource: dataSource});
      autocomplete().find('Input').first().defaultValue = 'tom';
      expect(autocomplete().find('Trigger').prop('popupVisible')).toBe(true);
    });
  });

  //
  describe('当设置onChange时', () => {
    beforeEach(() => {
      props.onChange = jest.fn();
    });

    it('和被渲染的Input的onChange属性相等', () => {
      const input = autocomplete().find('Input');
      expect(input.props().onChange).toBe(props.onChange);
    });

  });

});
