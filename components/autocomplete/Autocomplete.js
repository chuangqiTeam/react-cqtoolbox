// @flow
import React from 'react';
import pureRender from '../decorator/pureRender.js';
import clamp from 'ramda/src/clamp';

type Theme = {
  menu: string,
  menuItem: string,
  selected: string,
}

type Component = Class<React.Component<{}, {}, mixed>>;

type SourceItem = {label: string, value: string};

type Props = {
  align: {},
  value: string,
  defaultValue: string,
  dataSource: Array<SourceItem>,
  onSelect: () => void,
  onChange: () => void,
  children: React.Element<*>,
  theme: Theme,
}

type State = {
  open: boolean,
  selectedItem: number,
}

type DefaultProps = {
  onSelect: () => void,
  onChange: () => void,
  dataSource: Array<SourceItem>,
  align: {},
}

const factory = (Trigger: Component, Input: Component, Menu: Component, MenuItem: Component) => {
  class Autocomplete extends React.Component<DefaultProps, Props, State> {

    static defaultProps = {
      onChange: () => void 0,
      onSelect: () => void 0,
      dataSource: [],
      align: {
        points: ['tl', 'bl'],
        offset: [0, 10],
      }
    }

    state: State = {
      open: false,
      selectedItem: -1,
    }

    componentWillReceiveProps(nextProps, nextState) {
      this.setState({
        open: nextProps.dataSource.length > 0 &&
          nextProps.dataSource !== this.props.dataSource
      });
    }

    getMenus = (list) => {
      return (
        <Menu>
          {list.map(this.getMenu)}
        </Menu>
      );
    }

    getMenu = (item, index) => {
      const theme = this.props.theme;

      const itemTypes = {
        'string': item,
        'object': item.label,
      };

      return (
          <MenuItem
            selected={this.state.selectedItem === index}
            theme={theme}
            key={itemTypes[typeof item]}
            onClick={this.handleMenuItemClick(item)}>
            {itemTypes[typeof item]}
          </MenuItem>
      );
    }

    handleInputKeyDown = event => {
      const {dataSource} = this.props;
      const {selectedItem} = this.state;

      // 按回车
      if (event.which === 13 && selectedItem !== -1) {
        this.handleMenuItemClick(dataSource[selectedItem])();
      }
    }

    handleInputKeyUp = event => {
      const {dataSource} = this.props;

      // 按上下键
      if ([40, 38].indexOf(event.which) !== -1) {
        const selectRange = clamp(0, dataSource.length - 1);
        const selectedItem = selectRange(this.state.selectedItem + (event.which === 40 ? +1 : -1));
        this.setState({ selectedItem });
      }
    }

    handleMenuItemClick = item => () => {
      this.closeMenu();
      this.props.onSelect(item);
    }

    closeMenu = () => {
      this.setState({ open: false, selectedItem: -1 });
    }

    toggleMenu = () => {
      this.setState({
        open: this.props.dataSource.length > 0 && !this.state.open,
        selectedItem: -1
      });
    }

    render() {
      const {
        children,
        align,
        dataSource,
        onChange,
        value,
        defaultValue,
      } = this.props;

      const state = this.state;

      const menu = this.getMenus(dataSource);

      const child = children &&  React.isValidElement(children) ?
        React.Children.only(children) : <Input />;

      const inputProps = {
        onKeyDown: this.handleInputKeyDown,
        onKeyUp: this.handleInputKeyUp,
        onChange,
        defaultValue,
        value,
      };

      const inputElement = React.cloneElement(
         child,
         inputProps,
      );

      return (
        <Trigger
          popupAlign={align}
          matchTargetWidth={true}
          popupVisible={state.open}
          onPopupVisibleChange={this.toggleMenu}
          popup={menu}>
          {inputElement}
        </Trigger>
      );
    }
  }

  // CHANGED : every time render will update prop of popup and children.
  return pureRender(Autocomplete);
};

export {factory as autocompleteFactory};
