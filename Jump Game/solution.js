// https://leetcode.com/problems/jump-game/submissions/2145678694/?envType=study-plan-v2&envId=top-interview-150

// 35% / 84%

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let current = nums.length - 1;
  let i = current;

  while(i >= 0) {
    i--;

    if(nums[i] >= current - i) {
      current = i;
    }

    if (current === 0) {
      return true;
    }
  }

  return false;
};


