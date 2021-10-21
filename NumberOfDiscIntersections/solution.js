// 68 %

function solution(A) {
    const mappedA = A.map((r, index) => ({ start: index - r, end: index + r }))
    const isIntersection = (a, b) => a.end >= b.start

    let result = 0;

    for (let i = 0; i < mappedA.length - 1; i++) {
        for (let j = i + 1; j < mappedA.length; j++) {
            if (isIntersection(mappedA[i], mappedA[j])) {
                result++;
            }

            if (result > 10000000) {
                result = -1;
                break
            }
        }
        if (result > 10000000) {
            result = -1;
            break
        }
    }

    return result;
}