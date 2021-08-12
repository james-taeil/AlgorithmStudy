function solution(n, times) {
    var answer = 0;
    
    // 이분탐색 ???
    
    // 가장 작을 때의 경우와 가장 클 경우를 left, right로 설정
        // 가장 큰 경우
            // n / times.length 가 모두 가장 큰 시간을 사용했을 경우
    const right = Math.max(...times) * Math.ceil(n / times.length);
        // 가장 작은 경우
            // ?? 작은 경우가 답이어야 하는뎅 ,,,,,,,
    
    // 경우에 따라 mid를 기준으로 탐색
    while (right > left){
        const mid = Math.floor((left + right) / 2);
    }
    
    return answer;
}
