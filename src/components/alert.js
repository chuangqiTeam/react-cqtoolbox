import React, {Component} from 'react';
import Alert from '../../components/alert';

import Section from '../../components/section';


class AlertTest extends Component {
  render() {

    return (
      <Section title="警告提示">
        <Alert message="success提示" />
<br />
        <Alert message="success提示" />
<br />
        <Alert showIcon={false} message="success提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="info" message="info提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="info" message="info提示" />
<br />
        <Alert type="info" showIcon={false} message="info成功提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="warning" message="warning提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="warning" message="warning提示" />
<br />
        <Alert type="warning" showIcon={false} className="margin-bottom" message="info成功提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="error" message="error提示" description="想要提升排名到TOP3？请联系我们" />
<br />
        <Alert type="error" message="error提示" />
<br />
        <Alert type="error" showIcon={false} message="info成功提示" description="想要提升排名到TOP3？请联系我们" />
      </Section>
    );
  }
}

export default AlertTest;
