import React, {Component} from 'react';
import theme from './siderTheme.css';
import {Header} from '../../components/layout';
import {Menu, MenuItem, SubMenu} from '../../components/menu';

class HeaderTest extends Component {
  render() {

    return (
      <Header>
        <Menu mode="horizontal">
          <SubMenu theme={theme} title="榜单">
            <MenuItem icon="bar-chart">实时排名</MenuItem>
            <MenuItem icon="mail">基本信息</MenuItem>
            <MenuItem icon="laptop">版本记录</MenuItem>
          </SubMenu>
          <SubMenu theme={theme} title="工具">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
            <MenuItem>版本记录</MenuItem>
          </SubMenu>
          <SubMenu theme={theme} title="高级" placement="middle">
            <div className="flex">
              <div className="flex-1">
                <MenuItem icon="bar-chart">实时排名</MenuItem>
                <MenuItem icon="mail">基本信息</MenuItem>
                <MenuItem icon="laptop">版本的记录</MenuItem>
              </div>
              <div className="flex-1">
                <MenuItem icon="bar-chart">实时排名</MenuItem>
                <MenuItem icon="mail">基本信息</MenuItem>
                <MenuItem icon="laptop">版本的记录</MenuItem>
              </div>
            </div>
          </SubMenu>
          <MenuItem>服务</MenuItem>
          <MenuItem>专栏</MenuItem>
        </Menu>
      </Header>
    );
  }
}


export default HeaderTest;
