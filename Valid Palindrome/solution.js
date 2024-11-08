// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().split('').filter(char => char.match(/[a-z|0-9]/i));
    let left = 0;
    let right = s.length - 1;
    while (left !== right && left < right && s[left] === s[right]) {
        left++;
        right--;
    }
    return left >= right;
};