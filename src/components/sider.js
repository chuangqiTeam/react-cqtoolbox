import React, {Component} from 'react';
import {Menu, MenuItem, SubMenu} from '../../components/menu';
import theme from './siderTheme.css';
import {Sider} from '../../components/layout';

class SiderTest extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  getMode = () => {
    return this.state.collapsed ? 'vertical' : 'inline';
  }

  render() {
    const {
      collapsed
    } = this.state;

    return (
      <Sider
        onCollapse={this.onCollapse}
        collapsed={collapsed}
        theme={theme}>
        <Menu>
          <SubMenu mode={this.getMode()} theme={theme} icon="user" title="导航一">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
            <MenuItem selected>版本记录</MenuItem>
          </SubMenu>
          <SubMenu mode={this.getMode()} theme={theme} icon="team" title="导航二">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
            <MenuItem selected>版本记录</MenuItem>
          </SubMenu>
          <SubMenu mode={this.getMode()} theme={theme} icon="file" title="导航三">
            <MenuItem>实时排名</MenuItem>
            <MenuItem>基本信息</MenuItem>
            <MenuItem selected>版本记录</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}


export default SiderTest;
