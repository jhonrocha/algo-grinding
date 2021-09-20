// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function solution(cars: Array<any>) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = cars[0].length;
    return cars.map((unit, idx) => {
      let counter = 0;
      cars.forEach((comparing, idx2) => {
        if (idx == idx2) return;
        let diff = 0;
        for (let i = 0; i < len && diff <= 1; i++) {
          if (unit.charAt(i) !== comparing.charAt(i)) diff++;
        }
        if (diff <= 1) counter++;
      });
      return counter;
    });
}

