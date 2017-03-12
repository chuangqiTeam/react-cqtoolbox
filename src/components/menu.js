import React from 'react';
import {Menu, MenuItem, SubMenu} from '../../components/menu';

const MenuTest = () => (
  <section>
    <h5>菜单</h5>

    <Menu>
      <SubMenu icon="home" title="导航一">
        <MenuItem>实时排名</MenuItem>
        <MenuItem>基本信息</MenuItem>
        <MenuItem selected>版本记录</MenuItem>
      </SubMenu>
      <SubMenu icon="home" title="导航一">
        <MenuItem>实时排名</MenuItem>
        <MenuItem>基本信息</MenuItem>
        <MenuItem selected>版本记录</MenuItem>
      </SubMenu>
      <SubMenu icon="home" title="导航一">
        <MenuItem>实时排名</MenuItem>
        <MenuItem>基本信息</MenuItem>
        <MenuItem selected>版本记录</MenuItem>
      </SubMenu>
    </Menu>

  </section>
);

export default MenuTest;
