// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Map();
    const columns = new Map();
    const squares = new Map();


    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const el = board[i][j];

            if (el === '.') {
                continue;
            }

            if (rows.get(i)) {
                if (rows.get(i).has(el)) {
                    return false;
                }
            } else {
                rows.set(i, new Set());
            }

            rows.get(i).add(el);

            if (columns.get(j)) {
                if (columns.get(j).has(el)) {
                    return false;
                }
            } else {
                columns.set(j, new Set());
            }

            columns.get(j).add(el);


            const squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`
            if (squares.get(squareKey)) {
                if (squares.get(squareKey).has(el)) {
                    return false;
                }
            } else {
                squares.set(squareKey, new Set());
            }

            squares.get(squareKey).add(el);
        }
    }

    return true;
};