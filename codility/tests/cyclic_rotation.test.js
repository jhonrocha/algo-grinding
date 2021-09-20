import { solution } from '../cyclic_rotation.js';

describe('Running tests', () => {
  test('Validations', () => {
    let A = [3, 8, 9, 7, 6];
    let K = 3;
    expect(solution(A, K)).toBe([9, 7, 6, 3, 8]);
  });
});
