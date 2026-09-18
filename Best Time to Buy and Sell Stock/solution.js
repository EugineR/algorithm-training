// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
// 80% / 73%


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0;
  let maxProfit = 0;

  for(let r = 0; r < prices.length; r++) {
    const profit = prices[r] - prices[l];
    maxProfit = profit > maxProfit ? profit : maxProfit;

    if(prices[r] < prices[l]) {
      l = r;
    }
  }

  return maxProfit;
};
