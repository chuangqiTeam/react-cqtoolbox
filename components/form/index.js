import { themr } from 'react-css-themr';
import { FORM } from '../identifiers';
import Input from '../input';
import {formItemFactory} from './FormItem.js';
import theme from './theme.css';
const ThemedFormItem = themr(FORM, theme)(formItemFactory(Input));

export default ThemedFormItem;
export { ThemedFormItem as FormItem };
