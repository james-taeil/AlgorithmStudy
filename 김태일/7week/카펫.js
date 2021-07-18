function solution(brown, yellow) {
    // b = (row + col - 2) * 2
    // y = (row - 2)*(col-2)

    for (let row = 3; i <= brown + yellow; row++) {
        // 약수 찾기
        let col = Math.floor((brown + yellow) / row);
        if ((row - 2) * (col - 2) === yellow) {
            break;
        }
    }

    return [col, row];
}


let b = 10;
let y = 2;
console.log(solution(b, y))