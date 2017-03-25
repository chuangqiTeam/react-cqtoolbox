import { themr } from 'react-css-themr';
import { FORM } from '../identifiers';
import FormItem from './FormItem.js';
import theme from './theme.css';
const ThemedFormItem = themr(FORM, theme)(FormItem);

export default ThemedFormItem;
export { ThemedFormItem as FormItem };
