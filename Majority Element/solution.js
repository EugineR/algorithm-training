// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// 19% / 41%

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const min = Math.ceil(nums.length / 2);
  const map = {};

  for(let i = 0; i < nums.length; i++) {
    if(!map[nums[i]]) {
      map[nums[i]] = 0;
    }
    map[nums[i]]= map[nums[i]] + 1;

    if (map[nums[i]] >= min) {
      return nums[i];
    }
  }
};
