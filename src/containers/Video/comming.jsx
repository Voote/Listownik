import video from '../api/video';

const videoCommingApi = [...video]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen)
  .slice(0, 7);

export default videoCommingApi;
