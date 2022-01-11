import wholeApi from '../api/whole';

const allFinishedApi = [...wholeApi]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse()
  .slice(0, 7);

export default allFinishedApi;
