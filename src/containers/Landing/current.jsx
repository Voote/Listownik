import wholeApi from '../api/whole';

export const allCurrentApi = [...wholeApi]
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const allCurrentCollection = [...allCurrentApi].slice(0, 7);
