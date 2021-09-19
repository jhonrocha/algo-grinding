import { repeatedString } from "../src/repeated_string";

describe("Repeated String", () => {
  test("Validate it works", () => {
    let s = "a";
    let n = 1000000000000;
    expect(repeatedString(s, n)).toBe(1000000000000);
    s = "abcac";
    n = 10;
    expect(repeatedString(s, n)).toBe(4);
    s = "abacaca";
    n = 9;
    expect(repeatedString(s, n)).toBe(5);
  });
});
