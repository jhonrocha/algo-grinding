import { main } from '../problem1';

describe('Testing Problem 1', () => {
  test('Validate it works', () => {
    expect(main(10, [3,5])).toBe(23);
  });
  test('Run to 1000', () => {
    console.log(main(1000, [3,5]));
  });
});
