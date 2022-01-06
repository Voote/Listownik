import video from '../api/video';
import games from '../api/games';

const allCommingApi = [...video, ...games]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen)
  .slice(0, 7);

export default allCommingApi;
