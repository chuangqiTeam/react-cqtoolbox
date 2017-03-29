import React, { PropTypes } from 'react';
import {CaretDownIcon} from '../font_icon';
import classnames from 'classnames';

const factory = (ripple) => {
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
        children,
        ...other
      } = this.props;

      const iconClasses = classnames({
        [theme.open]: isActive,
      }, theme.arrow);

      return (
        <button
          type="button"
          data-react-toolbox="select_input"
          onClick={onClick}
          className={theme.select_input}
          {...other}>
          <div className={theme.value}>{selectedItem.label || placeholder}</div>
          <CaretDownIcon className={iconClasses} />
          {children}
        </button>
      );
    }
  }

  return ripple(SelectInput);
}

export {factory as selectInputFactory};
