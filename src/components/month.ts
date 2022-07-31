const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const monthChecker = (month) =>
  month > 9 ? months[month - 1] : months[month.slice(1, 2) - 1];
