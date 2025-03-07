// https://leetcode.com/problems/top-k-frequent-elements/description/
// medium diff

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countMap = new Map();
  let countArray = [];
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const sortedValues = [...countMap.entries()].sort(
    ([, valueA], [, valueB]) => valueB - valueA
  );

  for (i = 0; i < k; i++) {
    countArray.push(sortedValues[i][0]);
  }
  return countArray;
};

topKFrequent([1, 1, 4, 4, 4, 4, 6], 2);
