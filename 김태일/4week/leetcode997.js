function findJudge (n, trust) {
    const matrix = new Array(n).fill(0).map(() => Array(n).fill(0));
    const find = new Array(n).fill(0);
    // 값 넣어주기
    for(let [i, j] of trust) {
        matrix[i-1][j-1] = 1;
    }

    // 반복문으로 row 행에 1이 없는 인덱스 찾기
    for(let i = 0; i < matrix.length; i++) {
        find[i] = matrix[i].reduce((a, b) => a + b, 0);
    }

    if (find.indexOf(0) !== -1) {
        return find.indexOf(0) + 1;
    } else {
        return -1;
    }
}

console.log(findJudge(3, [[1,3],[2,3],[3,1]]))