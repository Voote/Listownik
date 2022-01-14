import video from '../api/video';

export const videoToDoApi = [...video]
  .filter((item) => item.finished === 0 && item.commingSoon === 0)
  .sort((a, b) => a.year - b.year);

export const videoToDoCollection = [...videoToDoApi].slice(0, 7);
