import wholeApi from '../api/whole';

const allCurrentApi = [...wholeApi]
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

export default allCurrentApi;
