function solution(a, b) {
    var answer = 0;
    
    // a와 b를 크기순으로 나눔
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    
    // 작은 수부터 큰 수까지 더한 값을 결과값에 더해줌
    for (let i=min; i<=max; i++){
        answer += i;
    }
    
    return answer;
}
