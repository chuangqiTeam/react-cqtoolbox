import {dateSelectFactory} from './DateSelect';
import {dateRangeSelectFactory} from './DateRangeSelect';
import { Calendar, DateRange } from 'react-date-range';

import Trigger from '../trigger';
import SelectInput from '../select_input';

const DateSelect = dateSelectFactory(Trigger, SelectInput, Calendar);
const DateRangeSelect = dateRangeSelectFactory(Trigger, SelectInput, DateRange);

export default DateSelect;
export { DateSelect };
export { DateRangeSelect };
