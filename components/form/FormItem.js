import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const factory = (Input) => {

  // const isInput = child => child.type === Input;

  class FormItem extends Component {
    static propTypes = {
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      children: PropTypes.node,
      className: PropTypes.string,
      theme: PropTypes.shape({
        formItem: PropTypes.string,
        withInput: PropTypes.string,
        label: PropTypes.string,
        errored: PropTypes.string,
        error: PropTypes.string,
      }),
    }

    renderChildren = (child) => {
      const props = this.props;

      return React.cloneElement(child, {theme: props.theme});
    }

    render() {
      const {theme, label, error, children, className} = this.props;

      const child = React.Children.only(children);

      const classes = classnames(theme.formItem, {
        [theme.errored]: !!error,
        // [theme.withInput]: isInput(child),
        [theme.withInput]: true,
      }, className);

      return (
        <div className={classes}>
          <label className={theme.label}>{label}</label>
          {this.renderChildren(child)}
          {!!error && <span className={theme.error}>{error}</span>}
        </div>
      );
    }
  }

  return FormItem;
}



export {factory as formItemFactory};
