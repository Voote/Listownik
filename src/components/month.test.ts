import { monthChecker } from './month';

describe('month checker', () => {
  it('should return month name', () => {
    const num: string = '11';

    expect(monthChecker(num)).toBe('November');
  });
});
