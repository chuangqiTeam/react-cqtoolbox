import React, { Component } from 'react';
import PropTypes from 'prop-types';
import splitEvery from 'ramda/src/splitEvery';
import addIndex from 'ramda/src/addIndex';
import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';
const isArray = (arr) => Object.prototype.toString.apply(arr) === '[object Array]';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, Menu, SubMenu, MenuItem) => {
  class CascadeSelect extends Component {

    static propTypes = {
      value: PropTypes.any,
      data: PropTypes.array,
      returnValue: PropTypes.bool,
      maxRowNum: PropTypes.number,
      maxCascadeRowNum: PropTypes.number,
      cascadeAction: PropTypes.oneOf(['click', 'hover']),
      onChange: PropTypes.func,
      theme: PropTypes.shape({
        menu: PropTypes.string,
        menuItem: PropTypes.string,
      }),
    }

    static defaultProps = {
      maxRowNum: 10,
      returnValue: false,
      maxCascadeRowNum: 5,
      cascadeAction: 'hover',
      onChange: () => void 0,
    }

    constructor(props) {
      super(props);

      let value;
      if ('value' in props) {
        value = props.value;
      } else {
        value = props.data[0].value;
      }

      this.state = {
        value,
        open: false,
      }
    }

    componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({ value: nextProps.value });
      }
    }

    getMenus = (list) => {
      const {
        data,
        theme,
        maxRowNum,
      } = this.props;

      const mapIndexed = addIndex(map);

      const menus =
        pipe(
          splitEvery(maxRowNum),
          mapIndexed(this.getMenu)
        )(data);

      return (
        <div className={theme.menuOutter}>
          {menus}
        </div>
      );
    }

    getMenu = (list, index) => {
      const theme = this.props.theme;
      return (
        <Menu
          key={index}
          mode="vertical"
          theme={theme}>
          {list.map(this.getMenuItem)}
        </Menu>
      );
    }

    getMenuItem = (item) => {
      const {
        theme,
        maxCascadeRowNum,
      } = this.props;
      const children = item.children;

      if (children && typeof isArray(item.children)) {

        const mapIndexed = addIndex(map);

        const menuItems =
          pipe(
            splitEvery(maxCascadeRowNum),
            mapIndexed(this.getMenuItemGroup)
          )(children);

        return (
          <SubMenu
            key={item.value}
            title={item.label}
            theme={theme}>
            <div className={theme.popupMenuInner}>
              {menuItems}
            </div>
          </SubMenu>
        );
      }

      return (
          <MenuItem
            key={item.label}
            theme={theme}
            onClick={this.handleMenuItemClick(item)}>
            {item.label}
          </MenuItem>
      );
    }

    getMenuItemGroup = (list, index) => {
      return <div key={index}>{list.map(this.getMenuItem)}</div>;
    }

    handleMenuItemClick = item => () => {
      this.handleSelectToggle();
      if (!('value' in this.props)) {
        this.setState({ value: item.value });
      }

      if (this.props.returnValue) {
        this.props.onChange(item.value);
      } else {
        this.props.onChange(item);
      }
    }

    handleSelectToggle = () => {
      this.setState({ open: !this.state.open });
    }

    render() {
      const props = this.props;
      const state = this.state;
      const menu = this.getMenus(props.data);


      const selectedItem =
        props.data.reduce((array, b) => {
              array.push(b);
              if (b.children && isArray(b.children)) array.push(...b.children);
              return array;
          }, [])
        .find(item => item.value === state.value) ||
        props.data[0];

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={state.open}
          onPopupVisibleChange={this.handleSelectToggle}
          popupTheme={props.theme}
          popup={menu}>
          <SelectInput
            theme={props.theme}
            selectedItem={selectedItem}
            isActive={state.open}
            onClick={this.handleSelectToggle} />
        </Trigger>
      );
    }
  }

  return CascadeSelect;
};

export {factory as cascadeSelectFactory};
