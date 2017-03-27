import React, {Component} from 'react';
import LazyImage from '../../components/lazyImage';
import Section from '../../components/section';

const apps = [
  'http://a3.mzstatic.com/us/r30/Purple122/v4/94/0e/00/940e0024-08ef-b416-bb70-7745be3568ab/icon125x125.jpeg',
  'http://a2.mzstatic.com/us/r30/Purple122/v4/cb/4a/64/cb4a64c0-bd1f-1e0c-a3dd-d194f634e97a/icon128x128.jpeg',
  'http://a1.mzstatic.com/us/r30/Purple122/v4/2b/da/f0/2bdaf0dd-5ab4-1ba7-cf84-92948b16a6c0/icon125x125.jpeg',
  'http://a4.mzstatic.com/us/r30/Purple62/v4/17/72/f0/1772f0cd-3b55-a690-bb86-cb03b8395fe5/icon128x128.jpeg',
  'http://a1.mzstatic.com/us/r30/Purple82/v4/8f/2b/88/8f2b88a9-23bc-2b5b-3b32-059edefd835b/icon128x128.jpeg',
];

const imgStyle = {width: 50, height: 50, display: 'block'};

class LazyImageTest extends Component {

  render() {
    return (
      <Section title="异步加载图片">

        <LazyImage className="margin-bottom" style={imgStyle} url={apps[0]} />
        <LazyImage className="margin-bottom" style={imgStyle} url={apps[1]} />
        <LazyImage className="margin-bottom" style={imgStyle} url={apps[2]} />
        <LazyImage className="margin-bottom" style={imgStyle} url={apps[3]} />
        <LazyImage className="margin-bottom" style={imgStyle} url={apps[4]} />

      </Section>
    )
  }
}

export default LazyImageTest;
