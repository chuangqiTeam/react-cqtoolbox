import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Loader from '../loader';

class Section extends Component {
  static PropTypes = {
    title: PropTypes.node,
    subTitle: PropTypes.node,
    rightTitle: PropTypes.node,
    children: PropTypes.node,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    isLoading: PropTypes.bool,
    isNull: PropTypes.bool,
    nullText: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.string,
  }

  static defaultProps = {
    isLoading: false,
    isNull: false,
    className: '',
    nullText: '',
    height: 'auto',
  }

  renderTitle = (title, subTitle, rightTitle) => {
    const theme = this.props.theme;
    const InnerClasses = classnames(theme.titleInner, theme[title ? 'normal' : 'small']);

    if (title || subTitle) {
      return (
        <div className={theme.title}>
          <div className={InnerClasses}>
            <span className={theme.tip}></span>
            <h2>{title || subTitle}</h2>
          </div>
          <div className={theme.rightTitle}>{rightTitle}</div>
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      title,
      subTitle,
      rightTitle,
      height,
      theme,
      className,
      isNull,
      nullText,
      isLoading,
    } = this.props;

    const classes = classnames(theme.section, className);
    const contentClasses = classnames(theme.content, {
      [theme.center]: isNull || isLoading,
    });

    let children;
    if (isLoading) {
        children = <Loader />;
    } else if (isNull) {
        children = <div className={theme.nullText}>{nullText}</div>;
    } else {
        children = this.props.children;
    }

    let titleElement = this.renderTitle(title, subTitle, rightTitle);

    return (
      <div
        data-react-toolbox="section"
        style={{ height }}
        className={classes}>
        {titleElement}
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    );
  }
}

export default Section;
