/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let highestL = [0, height[0]];
  let highestR = [height.length - 1, height[height.length - 1]];
  const lowestOfTwo = Math.min(highestR[1], highestL[1]);
  let maxWater = lowestOfTwo * (highestR[0] - highestL[0]);

  if (height.length === 2) {
  }
  for (const [index, num] of height.entries()) {
    const lheight = height[index];
    const rheight = height[height.length - index - 1];

    if (lheight > highestL[1]) {
      const lowestOfTwoBiggestHeights = Math.min(lheight, highestR[1]);
      const tempWaterArea = lowestOfTwoBiggestHeights * (highestR[0] - index);

      if (maxWater < tempWaterArea) {
        maxWater = tempWaterArea;
        highestL[0] = index;
        highestL[1] = num;
      }
    }
    console.log("in loop: rHeight", rheight, "highestR:", highestR[1]);
    if (rheight > highestR[1]) {
      const lowestOfTwoBiggestHeights = Math.min(highestL[1], rheight);
      const tempWaterArea =
        lowestOfTwoBiggestHeights * (height.length - index - 1 - highestL[0]);

      if (maxWater < tempWaterArea) {
        maxWater = tempWaterArea;
        highestR[0] = height.length - index - 1;
        highestR[1] = height[height.length - index - 1];
      }
    }
    console.log("highestL:", highestL[1], "highestR", highestR[1]);
    console.log("water after loop ", index, ":", maxWater);
  }

  return maxWater;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
