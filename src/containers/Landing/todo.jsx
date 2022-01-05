import video from '../api/video';
import games from '../api/games';

const allToDoApi = [...video, ...games]
  .filter((item) => item.finished === 0)
  .sort((a, b) => a.year - b.year)
  .slice(0, 7);

export default allToDoApi;
