export const reduceHyphenses = (arr) => {
  arr.map((item) => {
    item.when = item.when.replace(/-/g, '');
    return item;
  });
  return arr;
};

export const bigFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
