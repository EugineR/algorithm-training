// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=top-interview-150

// 100% / 92%

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(let i = 0; i <= haystack.length - needle.length; i++) {
    if(haystack[i] === needle[0] && haystack.substring(i,i+needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
