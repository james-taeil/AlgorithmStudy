// 카펫
// brown은 yellow를 감싸고 있기 때문에 가로와 세로를 -2씩하여 곱한값은 yellow
// 전체 카펫 크기 === 가로*세로  (가로-2)*(세로-2) === yellow
// 긴 부분이 가로, 짧은 부분이 세로  
function solution(brown, yellow) {
    let answer = [0,0];
    let total = brown+yellow;

    for(let i=3; i<total/2; i++) {
        let len = total/i;

        if((i-2)*(len-2) === yellow) {
            let weight = Math.max(len,i);
            let height = Math.min(len,i);

            answer = [weight, height];
            break;
        }
    }
    return answer;
}
let output = solution(10,2);
console.log(output);