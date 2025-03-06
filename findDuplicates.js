/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let list = new Set();

  for (i = 0; i < nums.length; i++) {
    if (list.has(nums[i])) {
      return true;
    } else {
      list.add(nums[i]);
    }
  }

  return false;
};
