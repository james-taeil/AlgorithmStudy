function solution(n, times) {
    var answer = 0;
    
    // 이분탐색 ??? => 정렬되어 있어야함
    times.sort((a, b) => a - b);
    
    // 가장 작을 때의 경우와 가장 클 경우를 left, right로 설정
        // 가장 큰 경우
            // 모두가 가장 긴 시간을 소요했을 경우
    let right = times[times.length-1] * n;
        // 가장 작은 경우
            // ?? 작은 경우가 답이어야 하는뎅 ,,,,,,,
    let left = 0;
    let count = 0;
    
    // 경우에 따라 mid를 기준으로 탐색
    while (right >= left){
        const mid = Math.floor((left + right) / 2);
        
        // mid의 경우에 n에 얼만큼 도달할 수 있는지를 확인
        for (let el of times) {
            count += Math.floor(mid / el);
        }
        // n에 도달 할 경우 왼쪽으로
        if (count >= n) {
            right = mid -1;
        }
        // 도달 못 할 경우 오른쪽으로
        else {
            left = mid + 1;
        }
        count = 0;
    }
    // 최솟값이기 때문에 left를 사용하여 맞는 값인지 확인
    for (let el of times){
        count += Math.floor(left / el);
    }
    if (count >= n){
        return left;
    }
}
