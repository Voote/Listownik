import video from '../api/video';

export const videoCommingApi = [...video]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen);

export const videoCommingCollection = [...videoCommingApi].slice(0, 7);
