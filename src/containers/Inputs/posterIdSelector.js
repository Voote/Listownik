import video from '../api/video';
import games from '../api/games';

const PosterIdSelector = (posterType) => {
  const lastArrayId = (arr) =>
    Object.values(arr)[Object.values(arr).length - 1].id + 1;
  return (posterType === 'game' && lastArrayId(games)) || lastArrayId(video);
};

export default PosterIdSelector;
