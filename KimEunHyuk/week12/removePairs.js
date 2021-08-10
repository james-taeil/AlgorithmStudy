// 시간초과 => 배열을 수정하는 방법 말고 새 배열에 추가하는 방법으로 해결해야할 듯.
function solution(s)
{
    var answer = -1;
    // s의 문자를 담아줄 배열 선언
    let arr = [];
    s = s.split('');
    
    // 반복하면서 s의 값이 배열의 값과 같은지 비교
    for (let i=0; i<s.length; i++){
        // 같으면 제거
        if (s[i] === arr[arr.length-1]){
            arr.pop();
        }
        // 다르면 입력
        else {
            arr.push(s[i]);
        }
    }
    if (arr.length > 0){
        answer = 0;
    }
    else {
        answer = 1;
    }
    return answer;
}
