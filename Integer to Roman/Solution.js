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

// 84%
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let temp = num;
    let str = '';

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const chars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    while (temp !== 0) {
        for(let i = 0; i < numbers.length; i++) {
            result = Math.floor(temp / numbers[i]);

            if (result > 0 && result < 4) {
                for (let j = 0; j < result; j++) {
                    str = str + chars[i];
                }

                temp = temp - result * numbers[i];
            }
        }
    }

    return str;
};

// 84% - memory optimised
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let temp = num;
    let str = '';

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const chars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];


    for (let i = 0; i < numbers.length; i++) {
        const result = Math.floor(temp / numbers[i]);

        if (result > 0) {
            for (let j = 0; j < result; j++) {
                str = str + chars[i];
            }

            temp = temp - result * numbers[i];
        }

        if (temp === 0) break;
    }


    return str;
};