function solution(progresses, speeds) {
    let answer = [];
    let preDay = 0;
    
    // 반복문 없이 map으로 모든 원소들 들려 해결
    progresses.map((el, idx) => {
        // 배열을 남은 일수로 변환해준다 
        let day = Math.ceil((100 - el) / speeds[idx]);
        // 7 3 9 => [2 1]
        // 5 10 1 1 20 1 => [1, 3, 2]
        
        // 앞의 값과 비교해서 push되면 새로운 값
        if (day > preDay){
            answer.push(1);
            preDay = day;
        }
        // push하지 않으면 카운트를 올려줌
        // answer의 idx가 넘어가면 카운트가 확정됐기 때문에 length-1로만 접근
        else {
            answer[answer.length-1]++;
        }
    })
    return answer;
    
//     let count = 0;
    
//     // 7 3 9
//     // 5 10 1 1 20 1
//     let pre = 0;
    
//     // 뒤에서부터 반복하면서 앞의 자리 수가 뒷 자리보다 작으면 전까지의 카운트(일수)를 푸시
//     // 배열의 길이-1 인덱스일 경우와 i가 0일 경우가 컨트롤 되지 않음
//     for (let i=progresses.length-1; i>=0; i--){
//         if (pre > progresses[i] || i === 0) {
//             // pre = progresses[i];
//             answer.unshift(count);
//             count = 1;
//         }
//         else {
//             count++;
//         }
//         pre = progresses[i];
//     }
//     return answer;
}
