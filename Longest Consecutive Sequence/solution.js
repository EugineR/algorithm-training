// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let result = 0;
    let current;
    let counter = 0;
    let l = nums.length;
    let unique = Array.from(set);

    for(let i = 0; i < unique.length; i++) {
        if (!set.has(unique[i] - 1)) {

            current = unique[i];
            while (set.has(current++)) {
                counter++;
            }

            result = Math.max(counter, result);
            counter = 0;
        }
    }

    return result;
};