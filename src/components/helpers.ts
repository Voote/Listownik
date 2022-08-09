import { ApiInterface } from '../DataProvider';

interface ItemInterface {
  when: string;
}

export const reduceHyphenses = (arr: ApiInterface[]) => {
  arr.map((item: ItemInterface) => {
    item.when = item.when.replace(/-/g, '');
    return item;
  });
  return arr;
};

export const bigFirstLetter = (word: string) =>
  word[0].toUpperCase() + word.slice(1);
