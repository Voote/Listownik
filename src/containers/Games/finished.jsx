import games from '../api/games';

export const gamesFinishedApi = [...games]
  .filter((item) => item.finished === 2)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const gamesFinishedCollection = [...gamesFinishedApi].slice(0, 7);
