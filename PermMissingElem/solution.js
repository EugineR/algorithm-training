// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
    const teoreticalLenght = A.length + 1;
    const teoreticalSum = teoreticalLenght * (teoreticalLenght + 1) / 2;
    const realSum = A.reduce((acc, item) => acc + item, 0);

    return teoreticalSum - realSum;
}