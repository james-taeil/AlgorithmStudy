function solution(citations) {
    // count를 선언해서 +1 씩하면서 배열의 원자와 비교해서 같으면 그 값 리턴
    // 배열을 내림차순으로 선언
    let answer = 0;

    citations.sort((a, b) => b - a)

    for (let el of citations) {
        if (answer + 1 <= el) {ㄴ
            answer += 1;
        }
    }
    return answer;
}
// 문제 이해
// [6,5,3,1,0]
// 1,2,3,4,5 


// 테스트 11, 16 실패
// 테스트 11번 [0, 1, 2] >> 1
// 테스트 16번 [0, 0, 0] >>> 0 || [0,1,1] >>> 1
// 해결 : if (answer + 1)을 해주면 된다.
let citations = [3, 0, 6, 1, 5]	;
console.log(solution(citations))