// https://leetcode.com/problems/group-anagrams
// 97 %
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = new Map();

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const countArray = new Array(26).fill(0);

        for (let j = 0; j < word.length; j++) {
            countArray[word[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = countArray.join(',');

        result.has(key)
            ? result.get(key).push(word)
            : result.set(key, [word])
    }

    return [...result.values()];
};

// 48%
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const countArray = new Array(26).fill(0);

        for (let j = 0; j < word.length; j++) {
            countArray[word[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = countArray.join(',');

        result[key] === undefined
            ? result[key] = [strs[i]]
            : result[key].push(strs[i])

    }

    return Object.values(result);
};