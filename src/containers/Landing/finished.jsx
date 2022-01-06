import video from '../api/video';
import games from '../api/games';

const allFinishedApi = [...video, ...games]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

export default allFinishedApi;
