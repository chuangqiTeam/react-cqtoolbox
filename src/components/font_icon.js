import React from 'react';
import FontIcon from '../../components/font_icon';

const FontIconTest = () => (
  <section>
    <h5>图标</h5>

    <div>
      <span>图标文字水平对齐</span>
      <FontIcon value="github" />
      <FontIcon value="minus-square" alt="explore icon" />
      <FontIcon value="question-circle" alt="zoom icon" />
      <FontIcon value="loading spin" />
      <FontIcon value="area-chart" />
    </div>

  </section>
);

export default FontIconTest;
