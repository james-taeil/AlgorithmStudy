function solution(progresses, speeds) {
    let answer = [];
    
    // 배열을 남은 일수로 변환해준다 
    let idx = 0;
    progresses.map((el) => {
        return Math.ceil((100 - el) / speeds[idx++]);
    })
    
    let count = 0;
    
    // 7 3 9
    // 5 10 1 1 20 1
    let pre = 0;
    
    // 뒤에서부터 반복하면서 앞의 자리 수가 뒷 자리보다 작으면 전까지의 카운트(일수)를 푸시
    // 배열의 길이-1 인덱스일 경우와 i가 0일 경우가 컨트롤 되지 않음
    for (let i=progresses.length-1; i>=0; i--){
        if (pre > progresses[i] || i === 0) {
            // pre = progresses[i];
            answer.unshift(count);
            count = 1;
        }
        else {
            count++;
        }
        pre = progresses[i];
    }
    return answer;
}
