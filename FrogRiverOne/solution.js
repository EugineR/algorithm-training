// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
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