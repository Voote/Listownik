import games from '../api/games';

export const gamesCommingApi = [...games]
  .filter((item) => item.commingSoon === 1)
  .sort((a, b) => a.seen - b.seen);

export const gamesCommingCollection = [...gamesCommingApi].slice(0, 7);
