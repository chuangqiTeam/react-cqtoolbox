import React, { Component, PropTypes } from 'react';
import Trigger from '../trigger';
import {Menu, MenuItem} from '../menu';
import SelectInput from '../select_input';
import splitEvery from 'ramda/src/splitEvery';
import addIndex from 'ramda/src/addIndex';
import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';

const popupAlign = {
  points: ['tl', 'bl'],
  offset: [0, 10],
};

const factory = (Trigger, SelectInput, Menu, MenuItem) => {
  class Select extends Component {

    static propTypes = {
      value: PropTypes.any,
      data: PropTypes.array,
      returnValue: PropTypes.bool,
      maxRowNum: PropTypes.number,
      onChange: PropTypes.func,
      theme: PropTypes.shape({
        menu: PropTypes.string,
        menuItem: PropTypes.string,
      }),
    }

    static defaultProps = {
      maxRowNum: 10,
      returnValue: true,
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
        props.data.find(item => item.value === state.value) ||
        props.data[0];

      const {
        value,
        data,
        returnValue,
        maxRowNum,
        onChange,
        ...other,
      } = this.props;

      return (
        <Trigger
          popupAlign={popupAlign}
          popupVisible={state.open}
          onPopupVisibleChange={this.handleSelectToggle}
          popupTheme={props.theme}
          popup={menu}>
          <SelectInput
            {...other}
            selectedItem={selectedItem}
            isActive={state.open}
            onClick={this.handleSelectToggle} />
        </Trigger>
      );
    }
  }

  return Select;
};

const Select = factory(Trigger, SelectInput, Menu, MenuItem);

export {factory as selectFactory};
export {Select};
