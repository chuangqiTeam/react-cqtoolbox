import {autocompleteFactory} from './Autocomplete.js';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { AUTOCOMPLETE, MENU } from '../identifiers';
import Trigger from '../trigger';
import Menu from '../menu/Menu';
import {menuItemFactory} from '../menu/MenuItem';
import themedRippleFactory from '../ripple';

import Input from '../input';
const ThemedMenuItem= themr(MENU, theme)(menuItemFactory(themedRippleFactory({})));
const ThemedMenu= themr(MENU, theme)(Menu);

const Autocomplete = autocompleteFactory(Trigger, Input, ThemedMenu, ThemedMenuItem);
const ThemedAutocomplete = themr(AUTOCOMPLETE, theme)(Autocomplete);

export default ThemedAutocomplete;
export {ThemedAutocomplete as Autocomplete};
