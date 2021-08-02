function solution(n) {
    let answer = '';
    
    // 3진법 문제
        // 3진법과 동일하나 3으로 나누어 떨어질 경우 0이 아니라 4로 표현
    let remainder;
    
    // 1 => 1       1 => 1
    // 2 => 2       2 => 2
    // 3 => 10      3 => 4
    // 4 => 11      4 => 11
    // 5 => 12      5 => 12
    // 6 => 20      6 => 24
    
    // 3으로 계속 나누면서 자리수를 채워간다.
    while (n > 0) {
        remainder = n % 3;
        n = Math.floor(n / 3);
        
        // if (remainder === 0) {   // 3진수 표현
        //     answer = '0' + answer;
        // }
        // n=3 => remainder=0, n=1 => 10
        if (remainder === 0) {
            // answer = '4' + answer;
            // n=3 => remainer=0, n=1 => 14 but expected 4
            // 1을 추가하지 말아야 된다.
            // n=6 => remainer=0, n=2 => 24 but expected 14
            // 몫을 하나 빼준다.
            answer = '4' + answer;
            n--;
        }
        
        else if (remainder === 1) {
            answer = '1' + answer;
        }
        else {
            answer = '2' + answer;
        }
    }
    return answer;
}
