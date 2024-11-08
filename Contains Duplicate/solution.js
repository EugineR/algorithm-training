// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    let result;

    return nums.some((num, index) => {
        result = set.has(num);
        set.add(num);

        return result;
    })
};