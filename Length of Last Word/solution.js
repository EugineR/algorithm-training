// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

// 100% / 84%

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  const regex = /\w/;
  let result = 0;

  for(let i = s.length - 1; i >= 0; i--) {
    if(regex.test(s[i])) {
      result++;
    } else {
      return result;
    }
  }

  return result;
};

