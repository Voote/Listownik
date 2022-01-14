import games from '../api/games';

export const gamesToDoApi = [...games]
  .filter((item) => item.finished === 0)
  .sort((a, b) => a.year - b.year);

export const gamesToDoCollection = [...gamesToDoApi].slice(0, 7);
