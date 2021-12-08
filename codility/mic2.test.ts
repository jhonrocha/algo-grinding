import { solution } from './mic2';

describe('Testing Problem 1', () => {
  test('Run to 1000', () => {
    let cars = ['100', '110', '010', '011', '100'];
    expect(solution(cars)).toBe([2, 3, 2, 1, 2]);
  });
});
