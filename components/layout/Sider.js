import React, { PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from '../font_icon';

class Sider extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    collapsible: PropTypes.bool,
    collapsed: PropTypes.bool,
    onCollapse: PropTypes.func,
    className: PropTypes.string,
    defaultCollapsed: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    collapsedWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    theme: PropTypes.shape({
      sider: PropTypes.string,
      collapsed: PropTypes.string,
    }),
  }

  static defaultProps = {
    collapsible: true,
    defaultCollapsed: false,
    width: 200,
    className: '',
    collapsedWidth: 64,
  }

  constructor(props) {
    super(props);

    let collapsed;
    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    this.state = {
      collapsed,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('collapsed' in nextProps) {
      this.setState({
        collapsed: nextProps.collapsed,
      });
    }
  }

  setCollapsed = (collapsed) => {
    if (!('collapsed' in this.props)) {
      this.setState({
        collapsed,
      });
    }
    const { onCollapse } = this.props;
    if (onCollapse) {
      onCollapse(collapsed);
    }
  }

  handleCollapsedToggle = () => {
    const collapsed = !this.state.collapsed;
    this.setCollapsed(collapsed);
  }

  render () {
    const {
      collapsible,
      width,
      theme,
      className,
      children,
      collapsedWidth,
      onCollapse, // eslint-disable-line
      collapsed, // eslint-disable-line
      defaultCollapsed, // eslint-disable-line
      ...other,
    } = this.props;

    const state = this.state;

    const siderWidth = state.collapsed ? collapsedWidth : width;

    const classes = classnames(theme.sider, {
      [theme.collapsed]: state.collapsed,
    }, className);

    const styles = {
      flex: `0 0 ${siderWidth}px`,
      width: `${siderWidth}px`,
    };

    return (
      <div
        {...other}
        style={styles}
        className={classes}>
        {collapsible &&
          <FontIcon
            className={theme.trigger}
            onClick={this.handleCollapsedToggle}
            value={state.collapsed ? 'menu-unfold' : 'menu-fold'} />}
        {children}
      </div>
    );
  }
}

export default Sider;
