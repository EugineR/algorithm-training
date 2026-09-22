// https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150

// 84% / 52%

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let total = 0;
  let tank = 0;
  let station = 0;

  for(let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];

    total += diff;
    tank += diff;

    if (tank < 0) {
      station = i + 1;
      tank = 0;
    }
  }

  return total >= 0 ? station : -1;
};
