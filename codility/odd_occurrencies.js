// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const odd_map = {};
  A.forEach((num) => {
    if (odd_map[num]) odd_map[num] = false;
    else odd_map[num] = true;
  });
  return A.find(key => odd_map[key]);
}
