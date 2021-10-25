// 100%

function solution(S) {
    const isOpenBracket = (symbol) => ['{', '[', '('].includes(symbol);
    const isCloseBracket = (symbol) => ['}', ']', ')'].includes(symbol);

    const closeOpenMap = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    const stack = [];

    for (let i = 0; i < S.length; i++) {
        const symbol = S[i];
        const isOpen = isOpenBracket(symbol);
        const isClose = isCloseBracket(symbol);

        if (isClose || isOpen) {
            if (isOpen) {
                stack.push(symbol)
            }

            if (isClose) {
                const popped = stack.pop();

                if (popped !== closeOpenMap[symbol]) {
                    return 0;
                }
            }
        }
    }

    return !!stack.length ? 0 : 1;
}