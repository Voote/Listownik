import video from '../api/video';

const videoToDoApi = [...video]
  .filter((item) => item.finished === 0)
  .sort((a, b) => a.year - b.year)
  .slice(0, 7);

export default videoToDoApi;
