import { solution } from "../odd_occurrencies.js";
import test from "ava";

test("Validations", (t) => {
  let A = [3, 8, 3, 8, 9, 9, 6, 7, 6];
  t.is(solution(A), 7);
  A = [];
  t.is(solution(A), undefined);
});

