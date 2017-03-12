import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FontIcon = ({ alt, children, className, theme, value, ...other}) => ( // eslint-disable-line
  <span
    data-react-toolbox="font-icon"
    aria-label={alt}
    className={
      classnames({
        'icon': typeof value === 'string',
      },
        ...(value || '').split(' ').map(name => `icon-${name}`),
        className)
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
};

FontIcon.defaultProps = {
  alt: '',
  className: '',
};

export default FontIcon;
export { FontIcon };
