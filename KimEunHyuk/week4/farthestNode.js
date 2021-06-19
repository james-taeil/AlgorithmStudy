function solution(n, edge) {
    let answer = 0;
    let matrix = [];
    let distance = [];
    let check = Array(n).fill(false);
    
    for (let i=0; i<n; i++){
        matrix.push([]);
        for (let j=0; j<n; j++){
            matrix[i][j] = 0;
        }
    }
    
    for (let i=0; i<edge.length; i++){
        matrix[edge[i][0]][edge[i][1]] = 1;
        matrix[edge[i][1]][edge[i][0]] = 1;
    }
    
    for (let i=0; i<n; i++){
        let queue = [];
        for (let j=0; j<check.length; j++){
            if (check[j] === false){
                queue.push(j);
                break;
            }
        }
        
        while (queue.length > 0) {
            let road = queue.shift();
            check[road] = true;
            
            if (matrix[i][1] === 1)
                break;
            
            for (let j=0; j<matrix[road].length; j++){
                if (matrix[road][j] === 1 && check[j] !== true)
                    queue.push(j);
            }
        }
    }
    
    return answer;
}
