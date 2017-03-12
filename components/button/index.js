import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import { buttonFactory } from './Button';
import themedRippleFactory from '../ripple';
import theme from './theme.css';
import FontIcon from '../font_icon';
const Button = buttonFactory(themedRippleFactory({ centered: false }), FontIcon);
const ThemedButton = themr(BUTTON, theme)(Button);

export default ThemedButton;
export { ThemedButton as Button };
