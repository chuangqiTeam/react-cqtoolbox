import React, { PropTypes } from 'react';
import Button from '../button';
import FontIcon from '../font_icon';
import classnames from 'classnames';

class SelectInput extends React.Component {
  static propTypes = {
    // 选择的值
    selectedItem: PropTypes.object,
    // 下拉框激活
    isActive: PropTypes.bool,
    placeholder: PropTypes.string,
    theme: PropTypes.object,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    isActive: false,
    placeholder: '',
  }

  render () {
    const {
      selectedItem,
      placeholder,
      theme,
      isActive,
      onClick,
    } = this.props;

    const iconClasses = classnames({
      [theme.open]: isActive,
    }, theme.arrow);

    return (
      <Button
        onClick={onClick}
        className={theme.select_input}>
        <div className={theme.value}>{selectedItem.label || placeholder}</div>
        <FontIcon className={iconClasses} value="down" />
      </Button>
    );
  }
}

export default SelectInput;
