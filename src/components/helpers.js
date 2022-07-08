export const reduceHyphenses = (arr) => {
  [...arr].map((item) => {
    item.when = item.when.replaceAll('-', '');
    return item;
  });

  return arr;
};
