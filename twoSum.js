/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(n^2)
var twoSum = function (nums, target) {
  for (const [index, num] of nums.entries()) {
    if (nums.includes(target - num)) {
      const foundIndex = nums.indexOf(target - num);

      if (foundIndex === index) {
        continue;
      }
      return [index, foundIndex];
    }
  }
};

console.log(twoSum([3, 3], 6));

//O(n)
var nTwoSum = function (nums, target) {
  const map = new Map();

  for (const [index, num] of nums.entries()) {
    const compliment = target - num;

    if (map.has(compliment)) {
      return [map.get(compliment), index];
    }

    map.set(num, index);
  }
};

console.log(nTwoSum([3, 3], 6));
