import wholeApi from '../api/whole';

export const allCommingApi = [...wholeApi]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen);

export const allCommingCollection = [...allCommingApi].slice(0, 7);
