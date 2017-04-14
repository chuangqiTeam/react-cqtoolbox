import React from 'react';
import {mount} from 'enzyme';
import Button from '../../button';
import Badge from '../index';

const BadgeButton = Badge(Button);

describe('Badge', () => {
  let props;
  let mountedBadge;

  const badge = () => {
    if (!mountedBadge) {
      mountedBadge = mount(<BadgeButton {...props}/>);
    }
    return mountedBadge;
  }

  beforeEach(() => {
    props = {
      count: undefined,
      text: undefined,
      dot: undefined,
      showZero: undefined,
      overflowCount: undefined,
      className: undefined,
      theme: undefined
    };

    mountedBadge = undefined;
  });

  describe('当传入属性count等于10', () => {

    it('渲染正确的数字', () => {
      props.count = '10';
      expect(badge().find('sup').text()).toBe('10');
    });

  });

});
