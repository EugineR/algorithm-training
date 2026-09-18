// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
// 100% / 53%
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if(j >= nums.length) {

      return k;
    }

    while (nums[j] === val && j < nums.length) {
      j++;
    }

    if(nums[j] !== val && j < nums.length) {
      nums[i] = nums[j];
      j++;
      k++;
    }
  }

  return k;
}

// 100% / 60%

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k]=nums[i];
      k++;
    }
  }

  return k;
}


