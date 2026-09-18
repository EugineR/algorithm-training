// https://leetcode.com/problems/min-stack/
var MinStack = function() {
    this.min = undefined;
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push({val, min: this.min });

    if (val < this.min || this.min === undefined) {
        this.min = val;
    };

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const el = this.stack.pop();
    this.min = el.min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */