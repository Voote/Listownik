import video from '../api/video';

const videoFinishedApi = [...video]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

export default videoFinishedApi;
