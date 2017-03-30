import { themr } from 'react-css-themr';
import { TABLE } from '../identifiers';
import Loader from '../loader';
import {tableFactory} from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableTr from './TableTr';
import TableTh from './TableTh';
import TableTd from './TableTd';

import theme from './theme.css';

const applyTheme = Component => themr(TABLE, theme)(Component);

const ThemedTableHead = applyTheme(TableHead);
const ThemedTableBody = applyTheme(TableBody);
const ThemedTableTr = applyTheme(TableTr);
const ThemedTableTh = applyTheme(TableTh);
const ThemedTableTd = applyTheme(TableTd);
const Table = tableFactory(ThemedTableHead, ThemedTableBody, ThemedTableTr, ThemedTableTh, ThemedTableTd, Loader);
const ThemedTable = applyTheme(Table);

ThemedTable.Head = ThemedTableHead;
ThemedTable.Body = ThemedTableBody;
ThemedTable.Tr = ThemedTableTr;
ThemedTable.Th = ThemedTableTh;
ThemedTable.Td = ThemedTableTd;

export default ThemedTable;
export {ThemedTableHead as TableHead};
export {ThemedTableBody as TableBody};
export {ThemedTableTr as TableTr};
export {ThemedTableTh as TableTh};
export {ThemedTableTd as TableTd};
