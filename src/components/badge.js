import React, {Component} from 'react';
import Badge from '../../components/badge';
import Button from '../../components/button';
import Section from '../../components/section';

const BadgeButton = Badge(Button);

class BadgeTest extends Component {
  render() {

    return (
      <Section title="徽章数">
        <BadgeButton label='徽章数' count="0" />
        <BadgeButton label='徽章数' dot />
        <BadgeButton label='徽章数' count="100" />
        <BadgeButton label='徽章数' text="N" />
        <BadgeButton label='徽章数' text="NEW" />
      </Section>
    )
  }
}

export default BadgeTest;
