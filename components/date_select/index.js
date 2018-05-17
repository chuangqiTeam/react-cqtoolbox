import {dateSelectFactory} from './DateSelect';
import {dateRangeSelectFactory} from './DateRangeSelect';
import { Calendar } from 'react-date-range';
import DateRange from './DateRange';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Trigger from '../trigger';
import SelectInput from '../select_input';

const DateSelect = dateSelectFactory(Trigger, SelectInput, Calendar);
const DateRangeSelect = dateRangeSelectFactory(Trigger, SelectInput, DateRange);

export default DateSelect;
export { DateSelect };
export { DateRangeSelect };
