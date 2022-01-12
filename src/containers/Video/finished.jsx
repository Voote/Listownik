import video from '../api/video';

export const videoFinishedApi = [...video]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const videoFinishedCollection = [...videoFinishedApi].slice(0, 7);
