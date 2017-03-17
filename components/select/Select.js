import React, { Component, PropTypes } from 'react';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, Menu, MenuItem) => {
  class Select extends Component {

    static propTypes = {
      value: PropTypes.any,
      data: PropTypes.array,
      onChange: PropTypes.func,
    }

    static defaultProps = {
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
      return (
        <Menu>
          {list.map(this.getMenu)}
        </Menu>
      );
    }

    getMenu = (item) => {
      const theme = this.props.theme;
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
      this.setState({ value: item.value });
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
        props.data.find(item => item.value === state.value) ||
        props.data[0];

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={state.open}
          onPopupVisibleChange={this.handleSelectToggle}
          popup={menu}>
          <SelectInput
            selectedItem={selectedItem}
            isActive={state.open}
            onClick={this.handleSelectToggle} />
        </Trigger>
      );
    }
  }

  return Select;
};

export {factory as selectFactory};
