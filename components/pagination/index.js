import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import {Button} from '../button';
import FontIcon from '../font_icon';
import { themr } from 'react-css-themr';
import { PAGINATION } from '../identifiers';
import theme from './theme.css';

const applyTheme = Component => themr(PAGINATION, theme)(Component);

import {
  pageFactory,
  ellipsisFactory,
  firstPageLinkFactory,
  lastPageLinkFactory,
  previousPageLinkFactory,
  nextPageLinkFactory,
} from './Pagination';

const Page = applyTheme(pageFactory(Button));
const Ellipsis = applyTheme(ellipsisFactory(Button));
const FirstPageLink = applyTheme(firstPageLinkFactory(Button, FontIcon));
const PreviousPageLink = applyTheme(previousPageLinkFactory(Button, FontIcon));
const NextPageLink = applyTheme(nextPageLinkFactory(Button, FontIcon));
const LastPageLink = applyTheme(lastPageLinkFactory(Button, FontIcon));

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const Pagination = createUltimatePagination({itemTypeToComponent});
const CustomPagination = ({theme, ...other}) =><div className={theme.pagination}><Pagination {...other} /></div>;
const ThemePagination = applyTheme(CustomPagination);

export default ThemePagination;
export {ThemePagination as Pagination};
