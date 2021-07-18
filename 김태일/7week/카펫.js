function solution(brown, yellow) {
    // b = (row + col - 2) * 2
    // y = (row - 2)*(col-2)
    let col, row;
    for (row = 3; row <= brown + yellow; row++) {
        // 약수 찾기
        col = Math.floor((brown + yellow) / row);
        if ((row - 2) * (col - 2) === yellow) {
            break;
        }
    }

    return [col, row];
}


let b = 24;
let y = 24;
console.log(solution(b, y))