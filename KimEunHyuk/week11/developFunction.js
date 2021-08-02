function solution(progresses, speeds) {
    let answer = [];
    
    // 배열을 남은 일수로 변환해준다 
    let idx = 0;
    progresses.map((el) => {
        return Math.ceil((100 - el) / speeds[idx++]);
    })
    
    let count = 1;
    let pre = progresses[0];
    
    // 7 3 9
    // 5 10 1 1 20 1
    for (let i=1; i<progresses.length; i++){
        if (progresses[i-1] <= progresses[i] || i === progresses.length-1) {
            pre = progresses[i];
            answer.push(count);
            count = 1;
        }
        else {
            count++;
        }
    }
    return answer;
}
