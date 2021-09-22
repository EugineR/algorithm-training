// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {

    let maxGap = 0;
    let lastTheOne;
    let index = 0;

    while (N >= 1) {
        const mod = N % 2;

        if (mod === 1) {
            if (lastTheOne !== undefined) {
                const newGap = index - lastTheOne - 1;

                if (newGap > maxGap) {
                    maxGap = newGap;
                }
            }

            lastTheOne = index;
        }

        N = Math.trunc(N / 2);
        index++;
    }

    return maxGap;
}