// https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150

// 45% / 27%

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a,b) => b - a);

  let i = 0;

  while (citations[i] >= i+1 && i < citations.length) {
    i++;
  }

  return i;
};
