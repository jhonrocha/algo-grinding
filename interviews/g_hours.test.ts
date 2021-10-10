function largestTimeFromDigits(arr: number[]): string {
  const max = (nums: number[], limit: number): [ number[], number ] => {
    let m = -1;
    let r: number[] = [];
    nums.forEach(n => {
      if ((n > m) && (n <= limit)) {
        if (m >= 0) r.push(m);
        m = n;
      } else {
        r.push(n);
      }
    });
    return [ r, m ];
  }
  // Steps:
  let n1, n2, n3, n4, r;
  [ r, n1 ] = max(arr, 2);
  if (n1 < 0) return '';
  if (n1 === 2) {
    [ r, n2 ] = max(r, 3);
    if (n2 < 0) {
      [ r, n1 ] = max(arr, 1);
      if (n1 < 0) return '';
      [ r, n2 ] = max(r, 9);
    }
  } else {
    [ r, n2 ] = max(r, 9);
  }
  if (n2 < 0) return '';
  [ r, n3 ] = max(r, 5);
  if (n3 < 0) return '';
  [ n4 ] = r;
  return `${n1}${n2}:${n3}${n4}`;
};


test("Max hours", () => {
  let arr = [1,2,3,4]
  // Output: "23:41"
  console.log(largestTimeFromDigits(arr));
  arr = [5,5,5,5]
  // Output: ""
  console.log(largestTimeFromDigits(arr));
  arr = [0,0,0,0]
  // Output: "00:00"
  console.log(largestTimeFromDigits(arr));
  arr = [0,0,1,0]
  // Output: "10:00"
  console.log(largestTimeFromDigits(arr));
});
