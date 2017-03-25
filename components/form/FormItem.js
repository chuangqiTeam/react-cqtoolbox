import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class FormItem extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
    error: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  renderChildren = (children) => {
    const props = this.props;
    const child = React.Children.only(children);

    return React.cloneElement(child, {theme: props.theme});
  }

  render() {
    const {theme, label, error, children, className} = this.props;

    const classes = classnames(theme.formItem, {
      [theme.errored]: !!error,
    }, className);

    return (
      <div className={classes}>
        <label className={theme.label}>{label}</label>
        {this.renderChildren(children)}
        {!!error && <span className={theme.error}>{error}</span>}
      </div>
    );
  }
}

export default FormItem;
