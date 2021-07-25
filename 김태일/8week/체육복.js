function solution (n, lost, reserve) {
    // 테스트 케이스 7번만 실패 >>> lost, reserve 정렬해주면된다.

    lost.sort((a, b) => a - b)
    reserve.sort((a, b) => a -b)
    
    let setLost = lost.filter(el => !reserve.includes(el))
    let setReserve = reserve.filter(el => !lost.includes(el))

    for (let el of setReserve) {
        let idx = setLost.indexOf(el);
        if (setLost.includes(el- 1)) {
            setLost.splice(idx - 1, 1);
        } else if (setLost.includes(el + 1)) {
            setLost.splice(idx + 1, 1);
        }
    }

    return n - setLost.length;
    
}

console.log(solution(5, [2, 4], [1, 3, 5]))