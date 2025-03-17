/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0 || !nums) {
    return -1;
  }
  const middleIndex = Math.trunc(nums.length / 2);
  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (nums[middleIndex] > target) {
    const result = search(nums.slice(0, middleIndex), target);
    return result;
  } else {
    const result = search(nums.slice(middleIndex + 1, nums.length), target);
    if (result === -1) {
      return -1;
    } else {
      return middleIndex + result + 1;
    }
  }
};

console.log(search([-1, 0, 3, 5, 9, 10, 12, 15, 16, 20, 99, 100], 99));
