import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


class TabContent extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    theme: PropTypes.shape({
      active: PropTypes.string,
      tab: PropTypes.string,
    }),
  };

  static defaultProps = {
    active: false,
    className: '',
  };

  render() {
    const {
      theme,
      active,
      tabIndex,
      className,
    } = this.props;


    const classes = classnames(theme.tab, {
      [theme.active]: active,
    }, className);

    return (
      <section className={classes} tabIndex={tabIndex}>
        {this.props.children}
      </section>
    );
  }
}

export default TabContent;
