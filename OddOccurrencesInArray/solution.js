// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    const occurrenceMap = {}

    A.forEach(item => {
        occurrenceMap[item] = !occurrenceMap[item]
    })

    const result = Object.keys(occurrenceMap).find((item) =>
        occurrenceMap[item] === true
    )

    return +result
}