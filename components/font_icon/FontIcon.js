import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FontIcon = ({ alt, children, className, spin, theme, value, ...other}) => ( // eslint-disable-line
  <span
    data-react-toolbox="font-icon"
    aria-label={alt}
    className={
      classnames([theme[value]], {
        [theme.icon]: typeof value === 'string',
        [theme.spin]: spin,
      }, className)
    }
    {...other}
  >
  {children}
  </span>
);

FontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
  value: PropTypes.string,
  spin: PropTypes.bool,
};

FontIcon.defaultProps = {
  alt: '',
  className: '',
  spin: false,
};

export default FontIcon;
export { FontIcon };
