// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/


// 72%
function solution72(X, A) {
    let result = -1;

    const leavesCountingArray = new Array(X).fill(0);

    A.some((item, index) => {
        if (leavesCountingArray[item - 1] !== undefined) {
            leavesCountingArray[item - 1] += 1;
        }

        const isAllLeavesExist = leavesCountingArray.every(item => item > 0)

        if (isAllLeavesExist) {
            result = index;
            return true
        } else {
            return false
        }

    })

    return result;
}

// 54%
function solution54(X, A) {
    let result = -1;

    const resultStorage = new Array(X)
        .fill(0)
        .map((item, index) => index + 1)
        .reduce((acc, item) => ({
            ...acc,
            [item]: item
        }), {})


    A.some((item, index) => {
        if (!!resultStorage[item]) {
            delete resultStorage[item];
        }

        const isAllLeavesExist = !Object.keys(resultStorage).length;

        if (isAllLeavesExist) {
            result = index;
            return true
        } else {
            return false
        }

    })

    return result;
}