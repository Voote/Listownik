export const useToDoApi = (data: any) => {
  // console.log('Zredukowane data', data);
  const toDoApi = [...data]
    .filter((item) => item.progress === 'todo' && item.commingSoon === '0')
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return toDoApi;
};

export const useCurrentApi = (data: any) => {
  const currentApi = [...data]
    .filter((item) => item.progress === 'now')
    .sort((a, b) => a.when - b.when)
    .reverse();

  return currentApi;
};

export const useCommingSoonApi = (data: any) => {
  const commingSoonApi = [...data]
    .filter((item) => item.commingSoon === '1')
    .sort(
      (a, b) =>
        (a.dateNext !== null ? a.dateNext : a.when) -
        (b.dateNext !== null ? b.dateNext : b.when)
    );

  return commingSoonApi;
};

export const useFinishedApi = (data: any) => {
  const finishedApi = [...data]
    .filter((item) => item.progress === 'done')
    .sort((a, b) => a.when - b.when)
    .reverse();

  return finishedApi;
};
