// https://leetcode.com/problems/palindrome-number/
// 72%
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('');
};