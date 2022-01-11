import wholeApi from '../api/whole';

const allToDoApi = [...wholeApi]
  .filter((item) => item.finished === 0)
  .sort((a, b) => a.year - b.year)
  .slice(0, 7);

export default allToDoApi;
