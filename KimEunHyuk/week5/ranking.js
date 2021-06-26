function solution(n, results) {

    var answer = 0;
    // 승패 행렬 그래프로 기록
    let matrix = [];
    let check = [];
    
    for(let i = 0; i < n; i++){
        matrix.push([]);
        for(let j = 0; j < n; j++){
            matrix[i][j] = 0;
        }
    }

    for (let el of results){
        matrix[el[0]-1][el[1]-1] = 1;
        matrix[el[1]-1][el[0]-1] = -1;
    }

    // [자신][자신]을 제외한 행의 모든 요소가 승패의 기록이 있으면 순위를 정할 수 있음
    for (let el of matrix){
        let count = 0;
        for (let num of el){
            if (num === 1 || num === -1){
                count++;
            }
        }
        if (count === n-1){
            answer++;
            check.push(el);
        }
    }
    
    // 정해진 순위를 기준으로 위아래로 순위를 가를 수 있는지를 판단
    for (let el of check){
        let arr = [0, 0];
        for (let num of el){
            if (num === 1){
                arr[0]++;
            }
            if (num === -1){
                arr[1]++;
            }
        }
        if (arr[0] === 1 || arr[1] === 1){
            answer++;
        }
    }

    return answer;
}