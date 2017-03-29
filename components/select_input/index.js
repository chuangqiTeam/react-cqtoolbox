import { themr } from 'react-css-themr';
import { SELECT_INPUT } from '../identifiers';
import {selectInputFactory} from './SelectInput';
import themedRippleFactory from '../ripple';
import theme from './theme.css';

const SelectInput = selectInputFactory(themedRippleFactory({centered: false }));
const ThemedSelectInput = themr(SELECT_INPUT, theme)(SelectInput);

export default ThemedSelectInput;
export {ThemedSelectInput as SelectInput};
