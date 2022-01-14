import games from '../api/games';

export const gamesCurrentApi = [...games]
  .filter((item) => item.finished === 1)
  .sort((a, b) => a.date - b.date)
  .reverse();

export const gamesCurrentCollection = [...gamesCurrentApi].slice(0, 7);
