import { monthChecker } from './month';

describe('month checker', () => {
  it('should return month name', () => {
    const num = 11;

    expect(monthChecker(num)).toBe('November');
  });
});
