//44%

function solution(A) {
    const sortedA = A.sort();
    const negativeMax = sortedA[0] * sortedA[1] * sortedA[A.length - 1];
    const positiveMax = sortedA[A.length - 1] * sortedA[A.length - 2] * sortedA[A.length - 3];

    return positiveMax > negativeMax ? positiveMax : negativeMax;
}