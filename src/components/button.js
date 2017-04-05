import React from 'react';
import {Button, ButtonGroup} from '../../components/button';
import Section from '../../components/section';

const GithubIcon = (<Button icon="github" label="Github" href="http://github.com/lanjingling0510"/>);

const ButtonTest = () => (
  <Section title="按钮" rightTitle={GithubIcon}>

    <div className="margin-bottom">
      <Button icon="book" label="书签" accent onRippleEnded={rippleEnded}/>
      <Button icon="book" label="书签" primary onRippleEnded={rippleEnded}/>
      <Button icon="book" label="书签" raised/>
      <Button icon="book" label="书签" raised primary/>
      <Button icon="book" label="书签" raised accent/>
      <Button icon="plus" label="添加" disabled/>
      <Button icon="plus" label="添加" raised disabled/>
      <Button icon="loading" iconSpin label="Loading" raised primary rippleMultiple={false} onRippleEnded={rippleEnded}/>
    </div>

    <div className="margin-bottom">
      <Button icon="plus" floating/>
      <Button icon="plus" floating primary/>
      <Button icon="plus" floating accent/>
      <Button icon="plus" floating primary disabled/>
      <Button icon="plus" floating accent mini/>
    </div>

    <div className="margin-bottom">
      <ButtonGroup>
        <Button label="书签"/>
        <Button label="书签"/>
        <Button label="书签"/>
      </ButtonGroup>
    </div>

    <div className="margin-bottom">
      <ButtonGroup size="small">
        <Button primary raised label="书签"/>
        <Button primary label="书签"/>
        <Button primary label="书签"/>
      </ButtonGroup>
    </div>

  </Section>
);

function rippleEnded() {
  console.log('Ripple animation ended!');
}

export default ButtonTest;
