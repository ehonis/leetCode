/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const searchSmallMatrix = (nums, target) => {
    if (nums.length === 0 || !nums) {
      return false;
    }
    const middleIndex = Math.trunc(nums.length / 2);
    if (nums[middleIndex] === target) {
      return true;
    } else if (nums[middleIndex] > target) {
      const result = searchSmallMatrix(nums.slice(0, middleIndex), target);
      return result;
    } else {
      const result = searchSmallMatrix(
        nums.slice(middleIndex + 1, nums.length),
        target
      );
      return result;
    }
  };

  for (i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] < target) {
      continue;
    } else {
      const TorF = searchSmallMatrix(matrix[i], target);
      if (TorF === undefined) {
        return false;
      } else {
        return TorF;
      }
    }
  }
  return false;
};

console.log(searchMatrix([[1]], 2));
