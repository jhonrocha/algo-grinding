import { main } from '../problem2';

describe('Testing Problem', () => {
  test('Validate it works', () => {
    expect(main(90)).toBe(44);
  });

  test('Run to 4000000', () => {
    console.log(main(4000000));
  });
});
