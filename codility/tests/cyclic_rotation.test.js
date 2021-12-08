import { solution } from "../cyclic_rotation.js";
import test from "ava";

test("Validations", (t) => {
  let A = [3, 8, 9, 7, 6];
  let K = 3;
  t.deepEqual(solution(A, K), [9, 7, 6, 3, 8]);
});
