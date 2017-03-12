import SelectInput from './SelectInput';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { SELECT_INPUT } from '../identifiers';

const ThemedSelectInput = themr(SELECT_INPUT, theme)(SelectInput);

export default ThemedSelectInput;
export {ThemedSelectInput};
