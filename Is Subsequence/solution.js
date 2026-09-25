// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

// 100% / 10%

var isSubsequence = function(s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }

    tIndex++;
  }

  return sIndex === s.length;
};
