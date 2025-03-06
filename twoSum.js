/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (const [index, num] of nums.entries()) {
    if (nums.includes(target - num)) {
      const foundIndex = nums.indexOf(target - num);

      return [index, foundIndex];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
