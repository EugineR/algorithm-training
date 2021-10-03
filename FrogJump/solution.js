// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, Y, D) {
    if (X === Y) {
        return 0
    }
    const result = (Y - X) / D

    return result === Math.floor(result) ? result : Math.floor(result) + 1;
}