import { bigFirstLetter, reduceHyphenses } from './helpers';

describe('helpers reducers', () => {
  it('returns array with no hyphenses', () => {
    const someArr = [
      { id: 0, when: '10-10-2020' },
      { id: 1, when: '07-07-2017' }
    ];

    expect(reduceHyphenses(someArr)).toStrictEqual([
      { id: 0, when: '10102020' },
      { id: 1, when: '07072017' }
    ]);
  });

  it('returns string with big first letter', () => {
    const someString = 'someString';

    expect(bigFirstLetter(someString)).toBe('SomeString');
  });
});
