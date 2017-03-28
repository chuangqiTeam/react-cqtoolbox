import { themr } from 'react-css-themr';
import { TABS } from '../identifiers';
import { tabFactory } from './Tab';
import TabContent from './TabContent';
import { tabsFactory } from './Tabs';
import theme from './theme.css';

const applyTheme = Component => themr(TABS, theme)(Component);

const ThemedTab = applyTheme(tabFactory());
const ThemedTabContent = applyTheme(TabContent);
const ThemedTabs = applyTheme(tabsFactory(ThemedTab, ThemedTabContent));

export { ThemedTab as Tab };
export { ThemedTabs as Tabs };
