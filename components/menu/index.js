import Menu from './Menu';
import {menuItemFactory} from './MenuItem';
import {subMenuFactory} from './SubMenu';
import {subMenuCaptionFactory} from './SubMenuCaption';
import themedRippleFactory from '../ripple';
import theme from './theme.css';
import { themr } from 'react-css-themr';
import { MENU } from '../identifiers';

const applyTheme = Component => themr(MENU, theme)(Component);

const ThemedMenu= applyTheme(Menu);
const ThemedSubMenuCaption= applyTheme(subMenuCaptionFactory(themedRippleFactory({})));
const ThemedSubMenu= applyTheme(subMenuFactory(ThemedSubMenuCaption));
const ThemedMenuItem= applyTheme(menuItemFactory(themedRippleFactory({})));

export default ThemedMenu;
export {ThemedMenu as Menu};
export {ThemedSubMenu as SubMenu};
export {ThemedMenuItem as MenuItem};
export {ThemedSubMenuCaption as SubMenuCaption};
