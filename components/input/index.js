import { themr } from 'react-css-themr';
import { INPUT } from '../identifiers';
import { inputFactory } from './Input.js';
import theme from './theme.css';
import FontIcon from '../font_icon';
const Input = inputFactory(FontIcon);
const ThemedInput = themr(INPUT, theme)(Input);

export default ThemedInput;
export { ThemedInput as Input };
