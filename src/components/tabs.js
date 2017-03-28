import React from 'react';
import {Tabs, Tab} from '../../components/tabs';
import Section from '../../components/section';

class TabsTest extends React.Component {
  state = {
    index: 1,
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleActive = () => {
    console.log('超级关键词激活了....');
  };

  render () {
    return (
      <Section title="标签页">
        <Tabs index={this.state.index} hideMode="display" onChange={this.handleTabChange}>
          <Tab label='超级关键词'><small>超级关键词内容....</small></Tab>
          <Tab label='置顶关键词' onActive={this.handleActive}><small>置顶关键词内容....</small></Tab>
          <Tab label='备注关键词'><small>备注关键词内容....</small></Tab>
          <Tab label='无效关键词' disabled><small>无效关键词...</small></Tab>
          <Tab label='隐藏关键词' hidden><small>隐藏的...</small></Tab>
        </Tabs>
      </Section>
    );
  }
}

export default TabsTest;
