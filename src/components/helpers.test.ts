import { ApiInterface } from '../DataProvider';
import { bigFirstLetter, reduceHyphenses } from './helpers';

describe('helpers reducers', () => {
  it('returns array with no hyphenses', () => {
    const someArr: ApiInterface[] = [
      {
        id: '0',
        when: '10-10-2020',
        cover: {
          url: ''
        },
        commingSoon: '',
        dateNext: null,
        name: '',
        part: null,
        platform: '',
        progress: '',
        releaseYear: 2018,
        wiki: ''
      },
      {
        id: '1',
        when: '07-07-2017',
        cover: {
          url: ''
        },
        commingSoon: '',
        dateNext: null,
        name: '',
        part: null,
        platform: '',
        progress: '',
        releaseYear: 2017,
        wiki: ''
      }
    ];

    expect(reduceHyphenses(someArr)).toStrictEqual([
      {
        id: '0',
        when: '10102020',
        cover: {
          url: ''
        },
        commingSoon: '',
        dateNext: null,
        name: '',
        part: null,
        platform: '',
        progress: '',
        releaseYear: 2018,
        wiki: ''
      },
      {
        id: '1',
        when: '07072017',
        cover: {
          url: ''
        },
        commingSoon: '',
        dateNext: null,
        name: '',
        part: null,
        platform: '',
        progress: '',
        releaseYear: 2017,
        wiki: ''
      }
    ]);
  });

  it('returns string with big first letter', () => {
    const someString = 'someString';

    expect(bigFirstLetter(someString)).toBe('SomeString');
  });
});
