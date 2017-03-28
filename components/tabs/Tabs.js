import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const factory = (Tab, TabContent) => {

  const isTab = child => child.type === Tab;
  const isTabContent = child => child.type === TabContent;

  class Tabs extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      hideMode: PropTypes.oneOf(['display', 'unmounted']),
      index: PropTypes.number,
      onChange: PropTypes.func,
      theme: PropTypes.shape({
        navigation: PropTypes.string,
        navigationContainer: PropTypes.string,
        pointer: PropTypes.string,
        tabs: PropTypes.string,
      }),
    }

    static defaultProps = {
      hideMode: 'unmounted',
      index: 0,
    }

    state = {
      pointer: {},
    }

    componentDidMount() {
      this.updatePointer(this.props.index);
    }

    componentWillReceiveProps(nextProps) {
      this.updatePointer(nextProps.index);
    }

    parseChildren() {
      const headers = [];
      const contents = [];

      React.Children.forEach(this.props.children, (item) => {
        if (isTab(item)) {
          headers.push(item);
          if (item.props.children) {
            contents.push(
              <TabContent theme={this.props.theme}>
                {item.props.children}
              </TabContent>,
            );
          }
        } else if (isTabContent(item)) {
          contents.push(item);
        }
      });

      return { headers, contents };
    }

    updatePointer = (idx) => {
      if (this.navigationNode && this.navigationNode.children[idx]) {
        const nav = this.navigationNode.getBoundingClientRect();
        const label = this.navigationNode.children[idx].getBoundingClientRect();
        const scrollLeft = this.navigationNode.scrollLeft;
        this.setState({
          pointer: {
            top: `${nav.height}px`,
            left: `${label.left - (nav.left + scrollLeft)}px`,
            width: `${label.width}px`,
          },
        });
      }
    }

    renderHeaders(headers) {
      return headers.map((item, idx) => React.cloneElement(item, {
        children: null,
        key: idx,
        index: idx,
        theme: this.props.theme,
        active: this.props.index === idx,
        onClick: (event, index) => {
          if (this.props.onChange) this.props.onChange(idx);
          if (item.props.onClick) item.props.onClick(event);
        },
      }));
    }


    renderContents(contents) {
      const contentElements = contents.map((item, idx) => React.cloneElement(item, {
        key: idx,
        theme: this.props.theme,
        active: this.props.index === idx,
        hidden: this.props.index !== idx && this.props.hideMode === 'display',
        tabIndex: idx,
      }));

      return this.props.hideMode === 'display'
        ? contentElements
        : contentElements.filter((item, idx) => (idx === this.props.index));
    }

    render() {
      const {
        theme,
        className,
      } = this.props;

      const { headers, contents } = this.parseChildren();
      const classes = classnames(theme.tabs, className);

      return (
        <div data-react-toolbox="tabs" className={classes}>
          <div className={theme.navigationContainer}>
             <nav className={theme.navigation} ref={(node) => { this.navigationNode = node; }}>
               {this.renderHeaders(headers)}
               <span className={theme.pointer} style={this.state.pointer} />
             </nav>
          </div>
          {this.renderContents(contents)}
        </div>
      );
    }
  }

  return Tabs;
}

export { factory as tabsFactory };
