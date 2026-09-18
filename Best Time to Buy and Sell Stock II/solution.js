// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

// 100% / 92%

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0;
  let profit = 0;

  for(let r = 0; r < prices.length; r++) {
    const diff = prices[r] - prices[l];

    if (diff > 0) {
      profit+=diff;
      l = r;
    }

    if(prices[r] < prices[l]) {
      l = r;
    }
  }

  return profit;
};
