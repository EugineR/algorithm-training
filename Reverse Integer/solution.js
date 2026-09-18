// https://leetcode.com/problems/reverse-integer/description/?source=submission-noac
// 23%
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = Math.pow(2, 31);

    const str = Math.abs(x).toString();
    const arr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i])
    }

    let result = Number(arr.join(''));

    if (result > limit) {
        return 0;
    }

    return x < 0 ? -result : result;
};


// 79%

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let initialAbs = Math.abs(x);
    let result = 0;

    while (initialAbs > 0) {
        result = result * 10 + initialAbs % 10;
        initialAbs = Math.floor(initialAbs / 10)
    }

    if (result > 2147483648) {
        return 0;
    }

    return x < 0 ? -result : result;
};