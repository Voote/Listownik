import video from '../api/video';

export const videoCurrentApi = [...video]
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const videoCurrentCollection = [...videoCurrentApi].slice(0, 7);
