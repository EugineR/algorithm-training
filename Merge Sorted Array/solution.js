// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// 100% / 6%

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  const copy = nums1.slice(0,m);

  for(let k = 0; k < m + n; k++) {

    if(i === m) {
      nums1[k] = nums2[j];
      j++;
      continue;
    }

    if (j === n) {
      nums1[k] = copy[i];
      i++;
      continue;
    }

    if(copy[i] <= nums2[j]) {
      nums1[k] = copy[i];
      i++;
    } else if (copy[i] > nums2[j]) {
      nums1[k] = nums2[j];
      j++;
    }
  }
};



