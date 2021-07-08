function solution(numbers, target) {
    var answer = 0;
    answer = dfs(0, numbers, target);
    
    return answer;
}

function dfs(zero, numbers, target){
    const recur = (num, i) => {
        // 마지막까지 왔을 때의 합이 target과 일치하는지 비교
        if (i === numbers.length) {
            // 일치하면 1을 리턴 (1씩 더한다)
            // 모든 경우의 수를 들리기 때문에 한 경우에서 1씩
            if (num === target) {
                return 1;
            }
            else {
                return 0;
            }
        }
        let n1 = num + numbers[i];
        let n2 = num - numbers[i];
        
        // 더하고 뺀 값을 끝까지 가져감
        return recur(n1, i+1) + recur(n2, i+1);
    }
    
    return recur(0, zero);
}
