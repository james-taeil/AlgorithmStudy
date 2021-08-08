function solution(progresses, speeds) {
    let answer = [];
    let powers = [];

    // 일률 배열 만들기
    for (let i = 0; i < progresses.length; i++) {
        let power = Math.ceil((100 - progresses[i]) / speeds[i]);
        powers.push(power)
    }

    while (powers.length > 0) {
        // 첫번째 숫자보다 큰 숫자 인덱스 번호 찾기
        let compareNumIndex = powers.findIndex(el => powers[0] < el);

        if (compareNumIndex >= 0) {
            answer.push(compareNumIndex);
            powers.splice(0, compareNumIndex);
        } else {
            answer.push(powers.length);
            powers.splice(0, powers.length);
        }
    }

    return answer;
}

/**
 * TODO 풀이 전략
 * * 자료구조 queue 동화책 만들기 랑 비슷 >>> 박스 포장으로 문제 바뀜
 * * 일률을 찾기 >>> 올림 필요
 * * progresses 를 100으로 뺀 뒤 속도를 나눈 값을 배열로 만들어주기
 
 * * 반복문을 돌린다...
 * * 첫 번째 일률보다 큰 숫자를 찾는다.
 * * 찾은 숫자의 인덱스가 0보다 클 경우 인덱스 숫자를 배열에 넣고
 * * 스플라이스를 사용해 일률 배열을 자른다
 * * 0보다 작은 경우 배열 전체의 길이를 넣어주고 일률 배열 자른다.
 */