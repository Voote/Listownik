import wholeApi from '../api/whole';

export const allToDoApi = [...wholeApi]
  .filter((item) => item.finished === 0 && item.commingSoon === 0)
  .sort((a, b) => a.year - b.year);

export const allToDoCollection = [...allToDoApi].slice(0, 7);
