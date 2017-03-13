import {selectFactory} from './Select';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { SELECT, MENU } from '../identifiers';
import Trigger from '../trigger';
import Menu from '../menu/Menu';
import {menuItemFactory} from '../menu/MenuItem';
import themedRippleFactory from '../ripple';

import SelectInput from '../select_input';
const ThemedMenuItem= themr(MENU, theme)(menuItemFactory(themedRippleFactory({})));
const ThemedMenu= themr(MENU, theme)(Menu);

const Select = selectFactory(Trigger, SelectInput, ThemedMenu, ThemedMenuItem);
const ThemedSelect = themr(SELECT, theme)(Select);

export default ThemedSelect;
export {ThemedSelect as Select};
