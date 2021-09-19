/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

export function repeatedString(s: string, n: number): number {
    // Write your code here
    const fullStr = Math.floor(n / s.length);
    const fullAs = (s.split("a").length - 1) * fullStr;
    const slicedStr = n % s.length;
    const slicedAs = s.slice(0,slicedStr).split("a").length - 1;
    return fullAs + slicedAs;
}
