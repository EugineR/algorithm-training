// https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 8% / 25%
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let current = nums.length - 1;
  let count = 0;

  while (current > 0) {
    let i = current;
    let temp;

    while (i >= 0) {
      i--;

      if (nums[i] >= current - i) {
        temp = i;
      }

      if (i === 0) {
        current = temp;
        count++;
      }
    }
  }

  return count;

};

// 65% / 99%

var jump = function(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] > farthest) farthest = i + nums[i];
    if (i === curEnd) { jumps++; curEnd = farthest; }
  }
  return jumps;
};
