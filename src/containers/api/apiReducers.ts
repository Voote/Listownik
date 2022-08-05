import { ApiInterface } from '../../DataProvider';

export interface DataInterface
  extends Omit<ApiInterface, 'name' | 'cover' | 'part' | 'wiki' | 'platform'> {
  name?: string;
}

export const useToDoApi = (data: DataInterface[]) => {
  console.log('Zredukowane data', data);
  const toDoApi = [...data]
    .filter((item) => item.progress === 'todo' && item.commingSoon === '0')
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return toDoApi;
};

export const useCurrentApi = (data: DataInterface[]) => {
  const currentApi = [...data]
    .filter((item) => item.progress === 'now')
    .sort((a, b) => parseInt(a.when) - parseInt(b.when))
    .reverse();

  return currentApi;
};

export const useCommingSoonApi = (data: DataInterface[]) => {
  const commingSoonApi = [...data]
    .filter((item) => item.commingSoon === '1')
    .sort(
      (a, b) =>
        (a.dateNext ? a.dateNext : parseInt(a.when)) -
        (b.dateNext ? b.dateNext : parseInt(b.when))
    );

  return commingSoonApi;
};

export const useFinishedApi = (data: DataInterface[]) => {
  const finishedApi = [...data]
    .filter((item) => item.progress === 'done')
    .sort((a, b) => parseInt(a.when) - parseInt(b.when))
    .reverse();

  return finishedApi;
};
