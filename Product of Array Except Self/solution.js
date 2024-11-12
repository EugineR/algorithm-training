// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);
    let product = 1;

    for (let i = 1; i < result.length; i++) {
        product *= nums[i - 1];
        result[i] = product;
    }

    product = 1;

    for (let i = result.length - 2; i >= 0; i--) {
        product *= nums[i + 1];
        result[i] *= product;
    }

    return result;
};