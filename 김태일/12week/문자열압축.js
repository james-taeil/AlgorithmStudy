function solution(s) {
    let answer = 0;
    let sLength = s.length;
    let newArr = [];
    for (let i = 1; i < parseInt(sLength/2); i++) {
        let count = 1;
        let str = '';

        for (let j = 0; j < sLength; j+=i) {
            let current = s.substr(j, i);
            let next = s.substr(j+i, i);

            // console.log(current, 'current')
            // console.log(next, 'next')

            if (current === next) {
                count++;
            } else {
                if (count > 1) str += count + current
                else str += current
                count = 1;
            }
        }
        newArr.push(str.length);
    }
    answer = Math.min(...newArr)

    return answer;
}

/**
 * TODO 풀이 전략
 * * 첫 반복문은 문자열 전체를 도는 반복문 (왜인지 모르겠는데, 길이의 반으로 나와도 되드라...)
 * * 두번째 반복문의 핵심은 j에 첫번째 값을 주는 것 (찾는 길이를 1, 2, 3) 늘려 나갈 수 있다.
 * * substr(a, b) 메소드를 이용해 현재 인덱스의 문자열과, 다음 문자열 확인
 * * 문자열이 같으면, 하나의 문자열 만들어줘서 숫자 + 문자열은 문자열로 출력
 * * 다르면 현재 문자열만 넣어서 출력
 * * 배열에 숫자와 문자를 더한 길이를 넣어주기
 * * 가장 낮은 최소값 출력하면 답
 */

let s = 'aabbaccc';
console.log(solution(s));