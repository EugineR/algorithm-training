//44%

function solution(A) {
    const sortedA = A.sort();
    const negativeMax = sortedA[0] * sortedA[1] * sortedA[A.length - 1];
    const positiveMax = sortedA[A.length - 1] * sortedA[A.length - 2] * sortedA[A.length - 3];

    return positiveMax > negativeMax ? positiveMax : negativeMax;
}

// 100%

function solution(A) {
    const comparator = (a, b) =>  a - b;
    const sortedA = A.sort(comparator);

    const negativeMax = sortedA[0] * sortedA[1] * sortedA[A.length - 1];
    const allNegativeMax = sortedA[0] * sortedA[1] * sortedA[2];
    const positiveMax = sortedA[A.length - 1] * sortedA[A.length - 2] * sortedA[A.length - 3];

    const results = [negativeMax, positiveMax, allNegativeMax].sort(comparator)

    return results[results.length - 1];
}