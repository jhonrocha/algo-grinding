// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let aux = A;
    for (let i = 0; i < K; i++) {
      aux.unshift(aux.pop());
    }
}
