import { countingValleys } from '../src/counting_valleys';

describe('Counting Valleys', () => {
  test('Validate it works', () => {
    let path = 'UDDDUDUU';
    expect(countingValleys(path.length, path)).toBe(1);
    path = 'UDDDUDUUUUDUDDDDUU';
    expect(countingValleys(path.length, path)).toBe(2);
  });
});
