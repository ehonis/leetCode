/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min;
  let maxProf;
  for (element of prices) {
    if (min === undefined || min > element) {
      min = element;
    } else {
      const tempProf = element - min;
      if (tempProf > maxProf || maxProf === undefined) {
        maxProf = tempProf;
      }
    }
  }
  if (maxProf === undefined) {
    return 0;
  }
  return maxProf;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
