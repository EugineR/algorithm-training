// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 50% / 93%

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) {
    return nums.length;
  }

  let k = 0;

  for (let i = 2; i < nums.length; i++) {
    if(nums[i] !== nums[k]) {
      nums[k+2] = nums[i]
      k++;
    }
  }

  return k+2;
};

// 86% / 74%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if(k < 2 || nums[i] !== nums[k-2]) {
      nums[k] = nums[i]
      k++;
    }
  }

  return k;
};
