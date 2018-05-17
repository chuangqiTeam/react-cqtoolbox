import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaults = {
  dot: false,
  overflowCount: 99,
  className: '',
  text: '',
  theme: {},
};

const badgeFactory = (options = {}) => {
  const {
    dot: defaultDot,
    overflowCount: defaultOverflowCount,
    className: defaultClassName,
    text: defaultText,
    theme: defaultTheme,
  } = {...defaults, ...options};

  return (ComposedComponent) => {
    class BadgedComponent extends React.Component {
      static propTypes = {
        count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        text: PropTypes.node,
        dot: PropTypes.bool,
        showZero: PropTypes.bool,
        className: PropTypes.string,
        overflowCount: PropTypes.number,
        theme: PropTypes.shape({
          badge: PropTypes.string,
          count: PropTypes.string,
          dot: PropTypes.string,
          text: PropTypes.string,
        }),
      }

      static defaultProps = {
        dot: defaultDot,
        overflowCount: defaultOverflowCount,
        className: defaultClassName,
        text: defaultText,
        theme: defaultTheme,
      }

      render () {
        const {
          count,
          text,
          dot,
          theme,
          showZero,
          className,
          overflowCount,
          ...other,
        } = this.props;

        const classes = classnames(theme.badge, className);

        const isDot = dot;
        let displayCount = count > overflowCount ? `${overflowCount}+` : count;
        // dot mode don't need count
        if (isDot) {
          displayCount = '';
        }

        const isZero = displayCount === '0' || displayCount === 0;
        const isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
        const hidden = (isEmpty || (isZero && !showZero)) && !isDot;


        const numberElement = !hidden && <sup className={theme.count}>{displayCount}</sup>;
        const textElement = text && <span className={theme.text}>{text}</span>;

        return (
          <div className={classes}>

            <ComposedComponent {...other} />

            {dot ?
              <sup className={theme.dot}></sup> :
              numberElement}
            {textElement}
          </div>
        );
      }
    }

    return BadgedComponent;
  }
};


export {badgeFactory};
