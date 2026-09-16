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
