// https://leetcode.com/problems/longest-palindromic-substring/description/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const getLongestPolindrome = (str, left, right) => {

        while (str[left] == str[right] && left >= 0 && right < s.length) {
            left--;
            right++;
        }

        return str.slice(++left, right);
    }

    if (s.length === 1) {
        return s[0];
    }

    let maxSubstring = '';

    for (let i = 0; i < s.length; i++) {
        const oddSubstr = getLongestPolindrome(s, i, i);
        const evenSubstr = getLongestPolindrome(s, i, i + 1);
        let tempStr = oddSubstr.length > evenSubstr.length ? oddSubstr : evenSubstr;

        if(tempStr.length > maxSubstring.length) {
            maxSubstring = tempStr;
        }
    }

    return maxSubstring;
};