export function main(input: number, cocients: Array<number>) {
  const resp = Array(input).fill(0).reduce((sum, _, idx) => {
    if (cocients.find((cc) => idx % cc === 0)) sum += idx;
    return sum;
  }, 0);
  return resp;
}
