// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

// 33% / 39%

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length !== 1) {
    const k = k % nums.length;
    let arr = nums.slice(0, nums.length - k);

    for (let i = 0; i < nums.length; i++) {
      if (i < k) {
        nums[i] = nums[i + nums.length - k];
      } else {
        nums[i] = arr[i - k]
      }
    }
  }
};
