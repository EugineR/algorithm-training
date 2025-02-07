// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let maxSquare = 0;
    while(l !== r) {
        const newSquare = (r - l) * Math.min(height[l], height[r]);
        maxSquare = Math.max(newSquare, maxSquare);

        if(height[l] > height[r]){
            r--;
        } else {
            l++;
        }
    }

    return maxSquare;
};