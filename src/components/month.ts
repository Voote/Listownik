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

export const monthChecker = (month: string) =>
  parseInt(month) > 9
    ? months[parseInt(month) - 1]
    : months[parseInt(month.slice(1, 2)) - 1];
