import React, { Component, PropTypes } from 'react';
import pureRender from '../decorator/pureRender.js';
import clamp from 'ramda/src/clamp';

const factory = (Trigger, Input, Menu, MenuItem) => {
  class Autocomplete extends Component {

    static propTypes = {
      align: PropTypes.object,
      value: PropTypes.string,
      defaultValue: PropTypes.string,
      dataSource: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
          })
        ])),
      onSelect: PropTypes.func,
      onChange: PropTypes.func,
      children: PropTypes.node,
      theme: PropTypes.shape({
        menu: PropTypes.string,
        menuItem: PropTypes.string,
        selected: PropTypes.string,
      })
    }

    static defaultProps = {
      onChange: () => void 0,
      onSelect: () => void 0,
      dataSource: [],
      align: {
        points: ['tl', 'bl'],
        offset: [0, 10],
      }
    }

    constructor(props) {
      super(props);

      this.state = {
        open: false,
        selectedItem: -1,
      }
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

      if (event.which === 13 && selectedItem !== -1) {
        this.handleMenuItemClick(dataSource[selectedItem])();
      }
    }

    handleInputKeyUp = event => {
      const {dataSource} = this.props;

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
