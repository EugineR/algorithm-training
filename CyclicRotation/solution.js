// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
    if (!A.length) {
        return [];
    }

    let result = [...A];
    const lastElementIndex = A.length - 1
    for (let i = 0; i < K; i++) {
        const lastElement = result[lastElementIndex];
        result.pop()
        result = [lastElement, ...result]
    }

    return result;
}