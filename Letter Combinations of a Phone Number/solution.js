// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?source=submission-noac
// 100%
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const digitToCharsMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    function addSymbols(currentArr, digit) {
        const newArr = [];
        const newSymbols = digitToCharsMap[digit];

        for (let i = 0; i < currentArr.length; i++) {
            for (let j = 0; j < newSymbols.length; j++) {
                newArr.push(currentArr[i] + newSymbols[j])
            }
        }

        return newArr;
    }

    let result = [...digitToCharsMap[digits[0]]];

    if (digits.length > 1) {
        let i = 1;
        while (i < digits.length) {
            result = addSymbols(result, digits[i])

            i += 1;
        }
    }

    return result;
};