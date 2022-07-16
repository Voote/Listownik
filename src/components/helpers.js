export const reduceHyphenses = (arr) => {
  [...arr].map((item) => {
    item.when = item.when.replaceAll('-', '');
  });
  return arr;
};

export const bigFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
