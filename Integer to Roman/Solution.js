// https://leetcode.com/problems/integer-to-roman/
// 34%
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let temp = num;
    let str = '';

    const pairs = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    while (temp !== 0) {
        for(let i = 0; i < pairs.length; i++) {
            const [number, char] = pairs[i];
            result = Math.floor(temp / number);

            if (result > 0 && result < 4) {
                for (let j = 0; j < result; j++) {
                    str = str + char;
                }

                temp = temp - result * number;
            }
        }
    }

    return str;
};