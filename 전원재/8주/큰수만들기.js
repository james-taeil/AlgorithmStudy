function solution(number, k){
    let result=[] // 결과 값이 들어감
    for(let i=0; i<number.length; i++){ // 모든 숫자를 비교
        let temp = number[i];       // 현재 인텍스의 숫자. 처음은 그냥 push

        // 무조건 push 하고 다음 반복문에서 이전 인텍스 숫자와 비교해서 현재인덱스가 이전인덱스보다
        // 크면 pop하고 아니면 그냥 감 이때 k는 --
        // 제거할 숫자를 다 채웠으면 그냥 넣음
        while(k>0 && result[result.length-1]<temp){
            result.pop();
            k--
        }
        result.push(temp)
    } 
    // k가 0일 경우 스택은 그대로,
    // k가 남아있다면 뒤에서 부터 제거 해준다.

    result.splice(result.length -k, k);
    var answer = result.join("")
    return answer
}