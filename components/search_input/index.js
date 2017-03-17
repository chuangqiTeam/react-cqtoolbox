import {searchInputFactory} from './SelectInput';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { SEARCH_INPUT } from '../identifiers';

const ThemedSearchInput = themr(SEARCH_INPUT, theme)(searchInputFactory);

export default ThemedSearchInput;
export {ThemedSearchInput};
