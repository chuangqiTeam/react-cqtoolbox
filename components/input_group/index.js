import {inputGroupFactory} from './InputGroup';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import { themr } from 'react-css-themr';
import { INPUTGROUP } from '../identifiers';
import theme from './theme.css';

const ThemedInputGroup = themr(INPUTGROUP, theme)(inputGroupFactory(Select, Input, Button));

export default ThemedInputGroup;
export {ThemedInputGroup as InputGroup};
