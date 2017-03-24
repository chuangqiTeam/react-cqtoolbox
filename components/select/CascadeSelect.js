import React, { Component, PropTypes } from 'react';

const isArray = (arr) => Object.prototype.toString.apply(arr) === '[object Array]';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, Menu, SubMenu, MenuItem) => {
  class CascadeSelect extends Component {

    static propTypes = {
      value: PropTypes.any,
      cascadeAction: PropTypes.oneOf(['click', 'hover']),
      data: PropTypes.array,
      onChange: PropTypes.func,
      theme: PropTypes.shape({
        menu: PropTypes.string,
        menuItem: PropTypes.string,
      }),
    }

    static defaultProps = {
      onChange: () => void 0,
      cascadeAction: 'hover',
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
      const theme = this.props.theme;

      return (
        <Menu
          mode="vertical"
          theme={theme}>
          {list.map(this.getMenu)}
        </Menu>
      );
    }

    getMenu = (item) => {
      const theme = this.props.theme;
      const children = item.children;

      if (children && typeof isArray(item.children)) {
        return (
          <SubMenu
            title={item.label}
            key={item.value}
            theme={theme}>
            {children.map(this.getMenu)}
          </SubMenu>
        );
      }

      return (
          <MenuItem
            theme={theme}
            key={item.label}
            onClick={this.handleMenuItemClick(item)}>
            {item.label}
          </MenuItem>
      );
    }

    handleMenuItemClick = item => () => {
      this.handleSelectToggle();
      if (!('value' in this.props)) {
        this.setState({ value: item.value });
      }

      this.props.onChange(item);
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
