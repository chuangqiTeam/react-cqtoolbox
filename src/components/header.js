import React, {Component} from 'react';
import theme from './siderTheme.css';
import Badge from '../../components/badge';
// import Input from '../../components/input';
// import Select from '../../components/select';
// import InputGroup from '../../components/input_group';
import {Header} from '../../components/layout';
import {Menu, MenuItem, SubMenu} from '../../components/menu';

const BadgeText = Badge(({children}) => <span>{children}</span>);

// const countrys = [
//   {value: 'RU', label: '俄罗斯'},
//   {value: 'BR', label: '巴西'},
//   {value: 'VN', label: '越南'},
//   {value: 'KH', label: '柬埔寨'},
//   {value: 'PH', label: '菲律宾'}
// ];
//
// const selectData = {
//   value: 1,
//   data: countrys,
//   maxRowNum: 8,
//   onChange: console.log.bind(console),
// };

class HeaderTest extends Component {
  render() {

    return (
      <Header>
        <div className="logo">
          <img height="100%" src={require('../image/logo.png')} alt=""/>
        </div>
        <Menu mode="horizontal">
          <SubMenu theme={theme} title="榜单">
            <MenuItem icon="bar-chart">
              <BadgeText text="N">实时排名</BadgeText>
            </MenuItem>
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
        {/* <InputGroup>
          <Select {...selectData} />
          <Input placeholder="请输入内容..." suffix="search" />
        </InputGroup> */}
      </Header>
    );
  }
}


export default HeaderTest;
