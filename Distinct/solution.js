// https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A) {
    const cache = {}

    let result = 0;

    for (let i = 0; i < A.length; i++) {

        if (!cache[A[i]]) {
            result++;
        }
        cache[A[i]] = true;

    }

    return result;
}