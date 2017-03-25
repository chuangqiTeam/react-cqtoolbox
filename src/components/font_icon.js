import React from 'react';
import FontIcon from '../../components/font_icon';
import Section from '../../components/section';

const FontIconTest = () => (
  <Section title="图标">

    <span>图标文字水平对齐</span>
    <FontIcon value="github" />
    <FontIcon value="minus-square" alt="explore icon" />
    <FontIcon value="question-circle" alt="zoom icon" />
    <FontIcon value="loading spin" />
    <FontIcon value="area-chart" />
  </Section>
);

export default FontIconTest;
