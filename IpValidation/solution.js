// 4216712120 > 2 , 42.167.121.20, 42.167.12.120
// 188212 > 8

function solution(S) {
    const allAddresses = [];
    const path = []

    snapshotIp(S, 0, 0)

    function snapshotIp(s, builderIndex, segment) {
        if (segment === 4 && builderIndex === s.length) {
            allAddresses.push(path.join('.'))
            return;
        } else if (segment === 4 || builderIndex === s.length) {
            return;
        }

        for (let len = 1; len <= 3 && builderIndex + len <= s.length; len++) {
            const snapshot = s.slice(builderIndex, builderIndex + len);
            const value = parseInt(snapshot, 10);

            if (value > 255 || len >= 2 && s[builderIndex] === '0') {
                break;
            }

            path[segment] = value;
            snapshotIp(s, builderIndex + len,segment + 1);
            path[segment] = -1;
        }
    }

    return allAddresses.length;
}

console.log(solution('4216712120'))
console.log(solution('188212'))
console.log(solution('188212188212188212'))
console.log(solution('4'))

