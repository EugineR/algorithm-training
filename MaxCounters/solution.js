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
