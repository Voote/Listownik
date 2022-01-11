import wholeApi from '../api/whole';

const allCommingApi = [...wholeApi]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen)
  .slice(0, 7);

export default allCommingApi;
