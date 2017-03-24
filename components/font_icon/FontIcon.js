import React, { PropTypes } from 'react';
import classnames from 'classnames';
import theme from './theme.css';
import {ICON} from '../identifiers';
import { themr } from 'react-css-themr'

const FontIcon = ({ alt, children, className, spin, theme, value, ...other}) => ( // eslint-disable-line
  <span
    data-react-toolbox="font-icon"
    aria-label={alt}
    className={
      classnames([theme[value]],[theme.icon], {
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


const ThemedFontIcon = themr(ICON, theme)(FontIcon);

const svgFontIconFactory = (WrappedComponent) => {
  return ({color, ...other}) => (
    <ThemedFontIcon {...other}>
      <WrappedComponent color={color} />
    </ThemedFontIcon>
  );
};

export default FontIcon;
export { FontIcon };
export { svgFontIconFactory };
