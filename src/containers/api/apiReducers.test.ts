import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from './apiReducers';

describe('Api reducers', () => {
  const someApi = [
    {
      id: '2',
      progress: 'now',
      commingSoon: '1',
      releaseYear: 2021,
      when: '20202020',
      dateNext: 2024
    },
    {
      id: '4',
      progress: 'done',
      commingSoon: '1',
      releaseYear: 2020,
      when: '20102020',
      dateNext: 2022
    },
    {
      id: '8',
      progress: 'todo',
      commingSoon: '0',
      releaseYear: 2020,
      when: '10202020',
      dateNext: null
    },
    {
      id: '16',
      progress: 'todo',
      commingSoon: '1',
      releaseYear: 2020,
      when: '20202021',
      dateNext: 2023
    },
    {
      id: '32',
      progress: 'todo',
      commingSoon: '1',
      releaseYear: 2010,
      when: '20202010',
      dateNext: 2024
    },
    {
      id: '64',
      progress: 'now',
      commingSoon: '0',
      releaseYear: 2012,
      when: '20202012',
      dateNext: null
    },
    {
      id: '128',
      progress: 'now',
      commingSoon: '0',
      releaseYear: 2021,
      when: '10102020',
      dateNext: null
    },
    {
      id: '256',
      progress: 'todo',
      commingSoon: '0',
      releaseYear: 2010,
      when: '10222020',
      dateNext: null
    },
    {
      id: '512',
      progress: 'done',
      commingSoon: '1',
      releaseYear: 2020,
      when: '20022021',
      dateNext: 2023
    },
    {
      id: '1024',
      progress: 'done',
      commingSoon: '1',
      releaseYear: 2010,
      when: '20022010',
      dateNext: 2025
    }
  ];

  it('return expected array when useToDoApi', () => {
    const expectedToDoArray = [
      {
        id: '256',
        progress: 'todo',
        commingSoon: '0',
        releaseYear: 2010,
        when: '10222020',
        dateNext: null
      },
      {
        id: '8',
        progress: 'todo',
        commingSoon: '0',
        releaseYear: 2020,
        when: '10202020',
        dateNext: null
      }
    ];

    expect(useToDoApi(someApi)).toEqual(expectedToDoArray);
  });

  it('should not have length of 5 when useToDoApi', () => {
    expect(useToDoApi(someApi)).not.toHaveLength(5);
  });

  it('should have length of 2 when useToDoApi', () => {
    expect(useToDoApi(someApi)).toHaveLength(2);
  });

  it('should return item[1] with id 8 when useToDoApi', () => {
    expect(useToDoApi(someApi)[1].id).toBe('8');
  });

  it('should not return array greater than 2 when useToDoApi', () => {
    expect(useToDoApi(someApi).length).not.toBeGreaterThan(2);
  });

  it('return expected array when useCurrentApi', () => {
    const expectedCurrentApi = [
      {
        id: '2',
        progress: 'now',
        commingSoon: '1',
        releaseYear: 2021,
        when: '20202020',
        dateNext: 2024
      },
      {
        id: '64',
        progress: 'now',
        commingSoon: '0',
        releaseYear: 2012,
        when: '20202012',
        dateNext: null
      },
      {
        id: '128',
        progress: 'now',
        commingSoon: '0',
        releaseYear: 2021,
        when: '10102020',
        dateNext: null
      }
    ];

    expect(useCurrentApi(someApi)).toEqual(expectedCurrentApi);
  });

  it('should return array greater than 2 when useCurrentApi', () => {
    expect(useCurrentApi(someApi).length).toBeGreaterThan(2);
  });

  it('should not return array greater than 4 when useCurrentApi', () => {
    expect(useCurrentApi(someApi).length).not.toBeGreaterThan(4);
  });

  it('should have length of 3 when useCurrentApi', () => {
    expect(useCurrentApi(someApi)).toHaveLength(3);
  });

  it('should return item[1] with id 64 when useCurrentApi', () => {
    expect(useCurrentApi(someApi)[1].id).toBe('64');
  });

  it('return expected array when useCommingSoonApi', () => {
    const expectedCommingSoonArray = [
      {
        id: '4',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2020,
        when: '20102020',
        dateNext: 2022
      },
      {
        id: '16',
        progress: 'todo',
        commingSoon: '1',
        releaseYear: 2020,
        when: '20202021',
        dateNext: 2023
      },
      {
        id: '512',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2020,
        when: '20022021',
        dateNext: 2023
      },
      {
        id: '2',
        progress: 'now',
        commingSoon: '1',
        releaseYear: 2021,
        when: '20202020',
        dateNext: 2024
      },
      {
        id: '32',
        progress: 'todo',
        commingSoon: '1',
        releaseYear: 2010,
        when: '20202010',
        dateNext: 2024
      },
      {
        id: '1024',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2010,
        when: '20022010',
        dateNext: 2025
      }
    ];
    expect(useCommingSoonApi(someApi)).toEqual(expectedCommingSoonArray);
  });

  it('should return array greater than 4 when useCommingSoonApi', () => {
    expect(useCommingSoonApi(someApi).length).toBeGreaterThan(4);
  });

  it('should not have length of 7 when useCommingSoonApi', () => {
    expect(useCommingSoonApi(someApi)).not.toHaveLength(7);
  });

  it('should have length of 6 when useCommingSoonApi', () => {
    expect(useCommingSoonApi(someApi)).toHaveLength(6);
  });

  it('should return item[2] with id 512 when useCommingSoonApi', () => {
    expect(useCommingSoonApi(someApi)[2].id).toBe('512');
  });

  it('return expected array when useFinishedApi', () => {
    const expectedFinishedArray = [
      {
        id: '4',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2020,
        when: '20102020',
        dateNext: 2022
      },
      {
        id: '512',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2020,
        when: '20022021',
        dateNext: 2023
      },
      {
        id: '1024',
        progress: 'done',
        commingSoon: '1',
        releaseYear: 2010,
        when: '20022010',
        dateNext: 2025
      }
    ];
    expect(useFinishedApi(someApi)).toEqual(expectedFinishedArray);
  });

  it('should have length of 3 when useFinishedApi', () => {
    expect(useFinishedApi(someApi)).toHaveLength(3);
  });

  it('should return item[0] with id 4 when useFinishedApi', () => {
    expect(useFinishedApi(someApi)[0].id).toBe('4');
  });

  it('should return array greater than 1 when useFinishedApi', () => {
    expect(useFinishedApi(someApi).length).toBeGreaterThan(1);
  });

  it('should not return array greater than 3 when useFinishedApi', () => {
    expect(useFinishedApi(someApi).length).not.toBeGreaterThan(3);
  });
});
