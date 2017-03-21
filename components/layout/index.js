import {basicFactory} from './Basic.js';
import Sider from './Sider.js';
import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';
import theme from './theme.css';

const applyTheme = Component => themr(LAYOUT, theme)(Component);

const ThemedLayout = applyTheme(basicFactory('layout'));
const ThemedHeader = applyTheme(basicFactory('header'));
const ThemedContent = applyTheme(basicFactory('content'));
const ThemedFooter = applyTheme(basicFactory('footer'));
const ThemedSider = applyTheme(Sider);

export default ThemedLayout;
export {ThemedLayout as Layout};
export {ThemedHeader as Header};
export {ThemedSider as Sider};
export {ThemedContent as Content};
export {ThemedFooter as Footer};
