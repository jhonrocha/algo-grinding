/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

export function jumpingOnClouds(c: number[]): number {
    // Write your code here
    let counter = 0;
    const len = c.length;
    for (let i = 0; i < len - 1; i++) {
      if (i+2 <= len) {
        if (c[i+2] == 0) i++;
      }
      counter++;
    }
    return counter;
}

