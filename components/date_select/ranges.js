export default {
  '今日': {
      startDate(e) {
          return e;
      },
      endDate(e) {
          return e;
      },
  },
  '昨日': {
      startDate(e) {
          return e.add(-1, 'days');
      },
      endDate(e) {
          return e.add(-1, 'days');
      },
  },
  '近7日': {
      startDate(e) {
          return e.add(-7, 'days');
      },
      endDate(e) {
          return e;
      },
  },
  '近30日': {
      startDate(e) {
          return e.add(-1, 'months');
      },
      endDate(e) {
          return e;
      },
  },
  '近三个月': {
      startDate(e) {
          return e.add(-3, 'months');
      },
      endDate(e) {
          return e;
      },
  },
  '近一年': {
      startDate(e) {
          return e.add(-1, 'years');
      },
      endDate(e) {
          return e;
      },
  },
};
