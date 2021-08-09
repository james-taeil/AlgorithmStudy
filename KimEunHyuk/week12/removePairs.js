function solution(s)
{
    var answer = -1;
    // s를 배열로 쪼개기
    s = s.split('');
    // 이전 값을 가지고 갈 변수 pre
    let pre = s[0];
    for (let i=1; i<s.length; i++){
        // 이전 값과 현재 값이 다를 때
        if (pre === s[i]){
            // s배열에서 이전 값과 현재 값 제거
            s = s.slice(0, i-1).concat(s.slice(i+1));
            // s배열이 달라졌기 때문에 처음부터 시작
            i=0;
            pre = s[0];
            continue;
        }
        // 반복이 넘어갈 때 이전 값 변경
        pre = s[i];
    }
    // s 배열이 다 비워졌다면 1, 아니라면 0 리턴
    if (s.length > 0){
        answer = 0;
    }
    else answer = 1;
    
    return answer;
}
