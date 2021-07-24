function solution(arr)
{
    var answer = [];
    
    // 비교할 변수 선언 (앞 인덱스의 요소)
    let pre = arr[0];

    answer.push(pre);
    
    // filter를 이용 앞의 인덱스 요소와 다른 값만을 푸시
    arr.filter((el) => {
        if (el !== pre){
            answer.push(el);
        }
        // 앞 인덱스의 값을 가지고 감.
        pre = el;
    });
    return answer;
}
