import React, { Component, PropTypes } from 'react';


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
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource.length > 0) {
        this.setState({ open: true });
      } else {
        this.setState({ open: false });
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

      const itemTypes = {
        'string': item,
        'object': item.label,
      };

      return (
          <MenuItem
            theme={theme}
            key={itemTypes[typeof item]}
            onClick={this.handleMenuItemClick(item)}>
            {itemTypes[typeof item]}
          </MenuItem>
      );
    }

    handleMenuItemClick = item => () => {
      this.closeMenu();
      this.props.onSelect(item);
    }

    closeMenu = () => {
      this.setState({ open: false });
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
          onPopupVisibleChange={this.closeMenu}
          popup={menu}>
          {inputElement}
        </Trigger>
      );
    }
  }

  return Autocomplete;
};

export {factory as autocompleteFactory};
