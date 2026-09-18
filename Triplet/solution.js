// 100%

function solution(A) {
    const numberComparator = (a, b) => a - b;
    const isTriplet = (z, x, y) => z + x > y && z + y > x && x + y > z;
    A.sort(numberComparator)

    for (let i = 0; i < A.length - 2; i++) {
        if (isTriplet(A[i], A[i + 1], A[i + 2])){
            return 1;
        }
    }

    return 0;
}