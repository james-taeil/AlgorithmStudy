function solution(numbers) {
    var answer = numbers;

    // 모든 요소가 0일 경우 '000'이런 식으로 출력되기 때문에 0으로만 출력시킨다.
    if (Number(answer.join(''))=== 0){
        return '0';
    }
    // 정렬하는데 정렬 조건이 스트링이 합쳐진 경우에 오름차순이 되게 한다.
    answer = answer.sort((a,b) => String(a)+String(b)>String(b)+String(a) ? -1 : 1);
    answer = answer.join('');
    
    return answer;
}
