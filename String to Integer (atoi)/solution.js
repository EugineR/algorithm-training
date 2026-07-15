// https://leetcode.com/problems/string-to-integer-atoi/description/?source=submission-noac
// 88%
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  let isNegative = false;
  const limit = Math.pow(2, 31);
  const str = s.trim();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' && i === 0) {
      isNegative = true;
      continue;
    }

    if (str[i] === '+' && i === 0) {
      continue;
    }

    if (str[i] >= '0' && str[i] <= '9') {
      if (result === 0 && str[i] === '0') {
        continue;
      }

      result = +str[i] + result * 10;
    } else {
      break
    }
  }

  if (isNegative) {
    result = -result;
  }

  if (result < -limit) {
    result = -limit;
  }

  if (result > limit - 1) {
    result = limit - 1;
  }

  return result;
};
