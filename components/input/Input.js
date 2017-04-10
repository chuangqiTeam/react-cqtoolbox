import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

const factory = (FontIcon) => {
  class Input extends Component {
    static propTypes = {
      size: PropTypes.oneOf(['small', 'normal', 'large']),
      value: PropTypes.any,
      defaultValue: PropTypes.any,
      className: PropTypes.string,
      prefix: PropTypes.node,
      suffix: PropTypes.node,
      onChange: PropTypes.func,
      onPrefixClick: PropTypes.func,
      onSuffixClick: PropTypes.func,
      placeholder: PropTypes.string,
      theme: PropTypes.shape({
        input: PropTypes.string,
        inputElement: PropTypes.string,
        textarea: PropTypes.string,
        small: PropTypes.string,
        normal: PropTypes.string,
        large: PropTypes.string,
        prefix: PropTypes.string,
        suffix: PropTypes.string,
        icon: PropTypes.string,
        bar: PropTypes.string,
      }),
    }

    static defaultProps = {
      className: '',
      size: 'normal',
      type: 'input',
      onPrefixClick: () => void 0,
      onSuffixClick: () => void 0,
    }

    handleInputChange = (e) => {
      const onChange = this.props.onChange;
      if (onChange) {
        onChange(e.target.value);
      }
    }

    render() {
      const {
        type,
        theme,
        className,
        prefix,
        suffix,
        size,
        onPrefixClick,
        onSuffixClick,
        ...other,
      } = this.props;


      if (type === 'textarea') {
        const classes = classnames(theme.textarea, className);

        return (
          <textarea
            data-react-toolbox="Input"
            {...other}
            className={classes}
            onChange={this.handleInputChange} />
        );
      }

      const classes = classnames(theme.input, theme[size], className);

      const prefixIcon = typeof prefix === 'string' ?
          <FontIcon
            theme={theme}
            onClick={onPrefixClick}
            className={theme.prefix}
            value={prefix} /> : prefix;

      const suffixIcon = typeof suffix === 'string' ?
          <FontIcon
            theme={theme}
            onClick={onSuffixClick}
            className={theme.suffix}
            value={suffix} /> : suffix;

      return (
        <div
          className={classes}>
          {prefixIcon}
          <input
            data-react-toolbox="Input"
            {...other}
            type={type}
            className={theme.inputElement}
            onChange={this.handleInputChange} />
          {suffixIcon}
          <span className={theme.bar}></span>
        </div>
      );
    }
  }

  return Input;
}

export {factory as inputFactory};
