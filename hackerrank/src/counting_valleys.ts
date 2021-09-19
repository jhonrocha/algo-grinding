/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

export function countingValleys(steps: number, path: string): number {
  // Lets call U as -1
  // Lets call D as +1
  let counter = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    const step = path.charAt(i)
    if (step === "U") {
      counter++;
      if (counter === 0) valleys++;
    } else {
      counter--;
    }
  };
  return valleys;
}
