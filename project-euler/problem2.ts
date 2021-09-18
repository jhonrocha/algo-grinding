export function main(input: number) {
  let sum = 0;
  let prev = 1;
  let i = 1;
  while (i < input) {
    if (i % 2 === 0) {
      sum += i;
    }
    const aux = i;
    i = i + prev;
    prev = aux;
  }
  return sum;
}
