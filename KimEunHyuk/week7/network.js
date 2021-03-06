function solution(n, computers) {
    var answer = 0;
    
    let queue = [];
    let check = Array(n).fill(false);
    
    for (let j=0; j<n; j++) {
        if (check[j] !== true){
          queue.push(j);
          while(queue.length > 0) {        
            let road = queue.shift();
            check[road] = true;

            for (let i=0; i<computers[road].length; i++) {
                if (computers[road][i] === 1 && check[i] !== true)
                    queue.push(i);
            }
          }
          answer++;
        }
    }
    return answer;
}
