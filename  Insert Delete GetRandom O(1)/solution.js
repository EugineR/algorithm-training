// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150

// 79% / 6%


var RandomizedSet = function () {
  this.map = {};
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const isExist = this.map[val] !== undefined;

  if (isExist) {
    return false;
  }

  this.values.push(val);
  this.map[val] = this.values.length - 1;

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const isExist = this.map[val] !== undefined;

  if (!isExist) {
    return false;
  }

  const index = this.map[val];
  const lastValue = this.values[this.values.length - 1];

  this.values[index] = lastValue;
  this.map[lastValue] = index;

  this.values.pop();
  delete this.map[val];

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.values.length);
  return this.values[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


