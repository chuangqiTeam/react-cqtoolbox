import {selectFactory} from './Select';
import {cascadeSelectFactory} from './CascadeSelect';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { SELECT } from '../identifiers';
import Trigger from '../trigger';
import {Menu, SubMenu, MenuItem} from '../menu';
import SelectInput from '../select_input';

const Select = selectFactory(Trigger, SelectInput, Menu, MenuItem);
const CascadeSelect = cascadeSelectFactory(Trigger, SelectInput, Menu, SubMenu, MenuItem);
const ThemedSelect = themr(SELECT, theme)(Select);
const ThemedCascadeSelect = themr(SELECT, theme)(CascadeSelect);

export default ThemedSelect;
export {ThemedSelect as Select};
export {ThemedCascadeSelect as CascadeSelect};
