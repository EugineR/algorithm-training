// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if(strs.length === 1) {
        return strs[0];
    }
    let firstElement = strs[0];
    for(let i = 0; i < firstElement.length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== firstElement[i]){
                return firstElement.slice(0, i);
            }
        }
    }
    return firstElement;
}