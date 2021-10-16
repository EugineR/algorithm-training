// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// 33
function solution(A) {
    const filteredA = A.filter(i => i > 0)
    const sortedUniqueArray = [...new Set(filteredA)].sort()

    for (let i = 0; i < sortedUniqueArray.length; i++) {
        const currentInteger = i + 1;

        if (currentInteger !== sortedUniqueArray[i]) {
            return currentInteger
        }
    }

    return sortedUniqueArray.length ? sortedUniqueArray.length + 1 : 1;
}

//33

function solution(A) {
    const filteredA = A.sort();
    let i = 1;
    const cache = {};

    while (filteredA.length) {
        let item = filteredA.shift();

        if (item > 0 && item < i && !cache[item]) {
            return i;
        } else if (item >= i && !cache[item]) {
            i++;
            cache[item] = true;
        }
    }

    return i;
}

//33

function solution(A) {
    const sortedA = A.sort();
    let i = 1;
    const cache = {};

    while (!!sortedA.length) {
        let item = sortedA.shift();

        if (item > 0 && !cache[item]) {
            if (item === i) {
                i++;
                cache[item] = true;
            } else if (item > i) {
                return i;
            }
        }
    }

    return i;
}