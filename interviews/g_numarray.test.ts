/*
Given an integer array nums, handle multiple queries of the following types:
1. Update the value of an element in nums.
2. Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:
- NumArray(int[] nums) Initializes the object with the integer array nums.
- void update(int index, int val) Updates the value of nums[index] to be val.
- int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
*/
class NumArray {
  constructor(nums: number[]) {}

  update(index: number, val: number): void {}

  sumRange(left: number, right: number): number {}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
test("NumArray Class", () => {
  let nums = [1, 3, 5];
  let [left, right] = [0, 2];
  let [index, val] = [1, 2];
  let obj = new NumArray(nums);
  obj.update(index, val);
  console.log(obj);
  let sum = obj.sumRange(left, right);
  console.log(sum);
  [left, right] = [0, 2];
  sum = obj.sumRange(left, right);
  console.log(sum);
});
