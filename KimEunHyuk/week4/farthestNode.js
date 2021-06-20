function solution(n, edge) {
    let answer = 0;
    let matrix = [];
    let distance = [];
    let check = Array(n-1).fill(false);
    
    // 행렬 형태 만들기
    for (let i=0; i<n; i++){
        matrix.push([]);
        for (let j=0; j<n; j++){
            matrix[i][j] = 0;
        }
    }
    
    // 행렬에 vertex 표기하기
    for (let i=0; i<edge.length; i++){
        matrix[edge[i][0]-1][edge[i][1]-1] = 1;
        matrix[edge[i][1]-1][edge[i][0]-1] = 1;
    }
    
    // n번까지 반복하면서 정점 1까지의 거리를 구하기 
    for (let i=1; i<n; i++){
        let queue = [];
        for (let j=0; j<check.length; j++){
            if (check[j] === false){
                queue.push(j);
                break;
            }
        }
        
        // 이렇게 하면 (check를 사용하면) 반복이 되면서 지난 반복에 들린 정점을 또 가지 않는다.
        // for 반복문에서 check를 초기화 시켜주어야 함.
        while (queue.length > 0) {
            let road = queue.shift();
            check[road] = true;
            
            if (matrix[i][0] === 1)
                break;
            
            for (let j=0; j<matrix[road].length; j++){
                if (matrix[road][j] === 1 && check[j] !== true)
                    queue.push(j);
            }
        }
        
    }
    
    return answer;
}