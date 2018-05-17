import {
  addDays,
  endOfDay,
  startOfDay,
  addYears,
  addMonths,
  isSameDay,
} from 'date-fns';

const defineds = {
  endOfWeek: endOfDay(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  endOfMonth: endOfDay(addMonths(new Date(), -1)),
  endOfLastThreeMonth: endOfDay(addMonths(new Date(), -3)),
  endOfYear: endOfDay(addYears(new Date(), -1)),
};

export default {
  '今日': {
    label: '今日',
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.startOfToday) &&
        isSameDay(range.endDate, defineds.endOfToday)
      );
    },
  },
  '昨日': {
    label: '昨日',
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.startOfYesterday) &&
        isSameDay(range.endDate, defineds.endOfYesterday)
      );
    },
  },
  '近7日': {
    label: '近7日',
    range: () => ({
      startDate: defineds.endOfWeek,
      endDate: defineds.startOfToday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.endOfWeek) &&
        isSameDay(range.endDate, defineds.startOfToday)
      );
    },
  },
  '近30日': {
    label: '近30日',
    range: () => ({
      startDate: defineds.endOfMonth,
      endDate: defineds.startOfToday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.endOfMonth) &&
        isSameDay(range.endDate, defineds.startOfToday)
      );
    },
  },
  '近三个月': {
    label: '近三个月',
    range: () => ({
      startDate: defineds.endOfLastThreeMonth,
      endDate: defineds.startOfToday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.endOfLastThreeMonth) &&
        isSameDay(range.endDate, defineds.startOfToday)
      );
    },
  },
  '近一年': {
    label: '近一年',
    range: () => ({
      startDate: defineds.endOfYear,
      endDate: defineds.startOfToday,
    }),
    isSelected: range => {
      return (
        isSameDay(range.startDate, defineds.endOfYear) &&
        isSameDay(range.endDate, defineds.startOfToday)
      );
    },
  },
};
