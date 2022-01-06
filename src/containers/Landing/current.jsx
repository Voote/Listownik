import video from '../api/video';
import games from '../api/games';

const allCurrentApi = [...video, ...games]
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

export default allCurrentApi;
