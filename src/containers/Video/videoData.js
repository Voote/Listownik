export const useToDoApi = (
  data = [{ id: 10, finished: 1, releaseYear: 2022 }]
) => {
  console.log('SZUKANA', data); // szukana zwraca nic
  const videoApiToDo = [...data]
    .filter((item) => item.progress === 'seen' && item.commingSoon === '0')
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return videoApiToDo;
};
