// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
    const sum = A.reduce((acc, i) => acc + i, 0);

    let leftPart = 0;
    let rightPart;
    let minDif;

    for (let i = 0; i < (A.length - 1); i++) {
        leftPart += A[i];
        rightPart = sum - leftPart;
        const currentDif = Math.abs(leftPart - rightPart);

        if (minDif === undefined) {
            minDif = currentDif;
        }

        if (currentDif < minDif) {
            minDif = currentDif;
        }
    }

    return minDif;
}