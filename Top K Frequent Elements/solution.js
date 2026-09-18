// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {};
    let char;

    for (let i = 0; i < nums.length; i++) {
        char = `${nums[i]}`;
        map[char] !== undefined
            ? map[char]++
            : map[char] = 1
    }

    return Object.keys(map)
        .sort((a, b) => map[b] < map[a] ? -1 : 1)
        .slice(0, k)
        .map(item => +item)
};