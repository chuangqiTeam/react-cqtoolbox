import React, {Component} from 'react';
import Tag from '../../components/tag';
import Section from '../../components/section';

class TagTest extends Component {
  render() {
    return (
      <Section title="标签">
        <div className="margin-bottom">
          <Tag label="榜单" />
          <Tag label="地图" />
          <Tag label="优酷" />
          <Tag label="视频" />
          <Tag label="漫画" />
          <Tag label="助手" />
        </div>

        <div className="margin-bottom">
          <Tag color="#18bbb1" label="榜单" />
          <Tag color="#18bbb1" label="地图" />
          <Tag color="#18bbb1" label="优酷" />
          <Tag color="#18bbb1" label="视频" />
          <Tag color="#18bbb1" label="漫画" />
          <Tag color="#18bbb1" label="助手" />
        </div>

        <div className="margin-bottom">
          <Tag closable label="榜单" />
          <Tag closable label="地图" />
          <Tag closable label="优酷" />
          <Tag closable label="视频" />
          <Tag closable label="漫画" />
          <Tag closable label="助手" />
        </div>

        <div className="margin-bottom">
          <Tag raised closable label="榜单" />
          <Tag raised closable label="地图" />
          <Tag raised closable label="优酷" />
          <Tag raised closable label="视频" />
          <Tag raised closable label="漫画" />
          <Tag raised closable label="助手" />
        </div>

        <div className="margin-bottom">
          <Tag color="#18bbb1" raised closable label="榜单" />
          <Tag color="#18bbb1" raised closable label="地图" />
          <Tag color="#18bbb1" raised closable label="优酷" />
          <Tag color="#18bbb1" raised closable label="视频" />
          <Tag color="#18bbb1" raised closable label="漫画" />
          <Tag color="#18bbb1" raised closable label="助手" />
        </div>
      </Section>
    );
  }
}

export default TagTest;
