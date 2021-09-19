import { jumpingOnClouds } from "../src/jumping_clouds";

describe("Jumping on the Clouds", () => {
  test("Validate it works", () => {
    let c = [0, 0, 1, 0, 0, 1, 0];
    expect(jumpingOnClouds(c)).toBe(4);
    c = [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0];
    expect(jumpingOnClouds(c)).toBe(9);
    c = [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    expect(jumpingOnClouds(c)).toBe(8);
  });
});
