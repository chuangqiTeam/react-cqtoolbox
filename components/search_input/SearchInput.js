import React, { PropTypes, Component } from 'react';

const factory = (Input) => {
  class SearchInput extends Component {
    static propTypes = {
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      selectedItem: PropTypes.object,
      placeholder: PropTypes.string,
      theme: PropTypes.object,
      onChange: PropTypes.func,
    }

    static defaultProps = {
      size: 'normal',
      placeholder: '',
    }

    handleInputChange = (e) => {
      const onChange = this.props.onChange;
      if (onChange) {
        onChange(e.target.value);
      }
    }

    render() {
      const {
        selectedItem,
        ...other,
      } = this.props;


      return (
        <Input
          {...other}
          prefix="search"
          suffix="close-circle"
          onChange={this.handleInputChange}
          value={selectedItem.label} />
      );
    }
  }

  return SearchInput;
}

export {factory as searchInputFactory};
