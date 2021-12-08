/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n == 0) return;
  if (m == 0) {
    nums1.forEach((v, i) => (nums1[i] = nums2[i]));
    return;
  }
  let i = 0;
  let j = 0;
  const resp = [];
  while (i < m || j < n) {
    if (j >= n || (i < m && nums1[i] < nums2[j])) {
      resp.push(nums1[i]);
      i++;
    } else {
      resp.push(nums2[j]);
      j++;
    }
  }
  resp.forEach((v, i) => (nums1[i] = v));
};

test("Check examples", () => {
  let nums1 = [1, 0];
  let m = 2;
  let nums2 = [2];
  let n = 1;
  merge(nums1, m, nums2, n);
  nums1 = [0];
  m = 0;
  nums1 = [1];
  n = 1;
  expect(nums1).toEqual([1]);
});
