// https://leetcode.com/problems/reverse-words-in-a-string/submissions/2150756823/?envType=study-plan-v2&envId=top-interview-150

// 83% / 86%

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter(Boolean).reverse().join(' ')
};
