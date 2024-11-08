// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const store = {};

    for (let i = 0; i < s.length; i++) {
        store[s[i]] === undefined ? store[s[i]] = 1 : store[s[i]]++;
    }

    for (let i = 0; i < t.length; i++) {
        if (store[t[i]] > 0) {
            store[t[i]]--;
        } else {
            return false;
        }
    }

    return true;
};