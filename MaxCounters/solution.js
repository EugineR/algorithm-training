// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// 77%
function solution(N, A) {
    const array = new Array(N).fill(0);
    let lastMax = 0;
    let currentMax;

    A.forEach(item => {
        const index = item - 1;

        if (item > N) {
            currentMax = lastMax
        } else {
            array[index]++
        }

        if (array[index] > lastMax) {
            lastMax = array[index]
        }
    })

    return array.map(item => item < currentMax ? currentMax : item);
}

// 100%

function solution(N, A) {
    const array = new Array(N).fill(0);
    let lastMax = 0;
    let currentMax = 0;

    A.forEach(item => {
        const index = item - 1;

        if (item > N) {
            currentMax = lastMax
        } else {
            if (array[index] <= currentMax) {
                array[index] = currentMax + 1
            } else {
                array[index]++
            }
        }

        if (array[index] > lastMax) {
            lastMax = array[index]
        }
    })


    return array.map(item => item < currentMax ? currentMax : item);
}
