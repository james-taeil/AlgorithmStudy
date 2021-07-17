function solution(n, computers) {
    let answer = 0;

    const checked = Array(n).fill(false)

    function dfs(idx){
        checked[idx] = true;

        for (let i = 0; i<n; i++){
            if(computers[idx][i] === 1 && !checked[i]){
                dfs(i)
            }
        }
    }

    for(let i=0; i<n; i++){
        if(!checked[i]){
            dfs(i)
            answer += 1
        }
    }
    return answer
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))