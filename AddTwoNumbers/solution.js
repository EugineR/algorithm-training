// https://leetcode.com/problems/add-two-numbers/
// 81%
var addTwoNumbers = function (l1, l2) {
    let shouldIncrementNext = false;
    let cursor1 = l1, cursor2 = l2;
    let resultArray = [];

    while(cursor1 || cursor2) {
        let sum = (+cursor1?.val || 0) + (+cursor2?.val || 0);
        cursor1 = cursor1?.next;
        cursor2 = cursor2?.next;

        if (shouldIncrementNext) {
            sum += 1;
        }

        shouldIncrementNext = sum > 9;

        resultArray.push(sum % 10);
    }

    if (shouldIncrementNext) {
        resultArray.push(1);
    }

    resultArray = resultArray.reverse();
    let previousResult;

    for (let i = 0; i < resultArray.length; i++) {
        const newNode = new ListNode(resultArray[i], previousResult);
        previousResult = newNode;
    }

    return previousResult;
};