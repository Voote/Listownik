import wholeApi from '../api/whole';

export const allFinishedApi = [...wholeApi]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const allFinishedCollection = [...allFinishedApi].slice(0, 7);
