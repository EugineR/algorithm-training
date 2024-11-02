// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let x, rightIndex;
    for (let i = 0; i < nums.length; i++) {
        x = target - nums[i];
        rightIndex = nums.findLastIndex(item => item === x);
        if(rightIndex > 0 && rightIndex !== i) {
            return [i, rightIndex];
        }
    }
};