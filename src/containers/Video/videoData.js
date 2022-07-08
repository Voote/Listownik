export const useToDoVideoApi = (
  data = [{ id: 10, finished: 1, releaseYear: 2022 }]
) => {
  console.log('SZUKANA', data); // szukana zwraca nic
  const toDoVideoApi = [...data]
    .filter((item) => item.progress === 'todo' && item.commingSoon === '0')
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return toDoVideoApi;
};

export const useFinishedVideoApi = (data) => {
  const finishedVideoApi = [...data]
    .filter((item) => item.progress === 'seen')
    .sort((a, b) => a.when - b.when)
    .reverse();

  return finishedVideoApi;
};

export const useCurrentVideoApi = (data) => {
  const currentVideoApi = [...data]
    .filter((item) => item.progress === 'now')
    .sort((a, b) => a.when - b.when)
    .reverse();

  return currentVideoApi;
};

export const useCommingSoonVideoApi = (data) => {
  const commingSoonVideoApi = [...data]
    .filter((item) => item.commingSoon === '1')
    .sort((a, b) => a.when - b.when);

  return commingSoonVideoApi;
};
