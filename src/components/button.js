import React from 'react';
import { Button } from '../../components/button';

const ButtonTest = () => (
  <section>
    <h5>按钮</h5>
    <Button
      icon="github"
      label="Github"
      href="http://github.com/lanjingling0510" />

    <Button
      icon="book"
      label="书签"
      accent
      onRippleEnded={rippleEnded} />

    <Button
      icon="book"
      label="书签"
      primary
      onRippleEnded={rippleEnded} />

    <Button
      icon="book"
      label="书签"
      raised />

    <Button
      icon="book"
      label="书签"
      raised
      primary />

    <Button
      icon="book"
      label="书签"
      raised
      accent />

    <Button
      icon="plus"
      label="添加"
      disabled />

    <Button
      icon="plus"
      label="添加"
      raised
      disabled />

    <Button
      icon="loading spin"
      label="Loading"
      raised
      primary
      rippleMultiple={false}
      onRippleEnded={rippleEnded} />

    <Button icon="plus" floating />
    <Button icon="plus" floating primary />
    <Button icon="plus" floating accent />
    <Button icon="plus" floating primary disabled />
    <Button icon="plus" floating accent mini />

  </section>
);

function rippleEnded() {
  console.log('Ripple animation ended!');
}

export default ButtonTest;
