/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = new Map();
  let resp = [];
  nums.find((s, idx) => {
    const compl = target - s;
    if (hash.has(compl)) {
      resp = [hash.get(compl), idx];
      return true;
    } else {
      hash.set(s, idx);
    }
  });
  return resp;
};

module.exports = twoSum;
