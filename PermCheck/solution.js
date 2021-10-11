// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
    const mappedArray = new Array(A.length).fill(0);

    A.forEach(item => {
        if (mappedArray[item - 1] !== undefined) {
            mappedArray[item - 1]++
        }
    })

    return mappedArray.some(item => item !== 1) ? 0 : 1
}