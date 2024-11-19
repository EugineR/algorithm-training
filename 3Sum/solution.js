// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];

    const get2Sum = (numbers, el) => {
        let left = 0;
        let right = numbers.length - 1;
        let sum;
        const res = [];

        while (left < right) {
            sum = el + numbers[left] + numbers[right];
            if (sum === 0) {

                res.push([el, numbers[left], numbers[right]])
                left++;
                while (numbers[left - 1] === numbers[left] && left < right) {
                    left++;

                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }

        return res;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        result.push(...get2Sum(nums.slice(i + 1), nums[i]));
    }

    return result;
};