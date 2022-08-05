type ItemType = {
  when: string;
};

export const reduceHyphenses = (arr: []) => {
  arr.map((item: ItemType) => {
    item.when = item.when.replace(/-/g, '');
    return item;
  });
  return arr;
};

export const bigFirstLetter = (word: string) =>
  word[0].toUpperCase() + word.slice(1);
