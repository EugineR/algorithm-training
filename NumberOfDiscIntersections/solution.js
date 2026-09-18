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

// incorrect

function solution(A) {
    const mappedA = A.map((r, index) => ({ start: index - r, end: index + r }))

    const startStorage = {}
    const endStorage = {}

    const coords = mappedA.reduce((acc, item) => {
        acc[item.start] = true;
        acc[item.end] = true


        startStorage[item.start] ? startStorage[item.start]++ : startStorage[item.start] = 1
        endStorage[item.end] ? endStorage[item.end]++ : endStorage[item.end] = 1

        return acc;
    }, {})

    const sortedCoords = Object.keys(coords).sort((a, b) => a - b);

    let result = 0;
    let amountOfStarted = 0;


    console.log(startStorage, endStorage, sortedCoords)
    for (let i = 0; i < sortedCoords.length; i++) {
        const currentX = sortedCoords[i];

        if (!!startStorage[currentX]) {
            amountOfStarted += startStorage[currentX];
        }

        if (!!endStorage[currentX]) {
            result += amountOfStarted - endStorage[currentX]
            amountOfStarted -= endStorage[currentX];
        }

        console.log(currentX, amountOfStarted, result)

        if (result > 10000000) {
            result = -1;
            break
        }
    }

    return result;
}