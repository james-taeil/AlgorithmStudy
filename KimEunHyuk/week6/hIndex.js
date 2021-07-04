function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => b-a);
    
    // for (let el of citations){
    //     if (el >= answer && el !== 0)
    //         answer++;
    //     else {
    //         break;
    //     }
    while(answer+1 <= citations[answer]){
        answer++;
    }
    // 1 1 0 을 입력받았을 때, 1을 리턴해야하는데 2를 리턴하고 있음.
    
    // 2 2 0 을 입력받으면, 2리턴 ㅇㅋ
    
    // 2 2 2 를 입력받으면, 3리턴 x
    
    // 3 3 0 => 2리턴 ㅇㅋ
    
    // 7 7 3 1 1
    
    // 3 2 2 => 3리턴 x
    
    // 앞의 요소와 같은 경우를 count ? 
    
    // 아예 큰 경우 [5, 5, 0] 이런 경우에는 해당 안되기 때문에 불편
    
    // 같은 것이 여러 개 있을 경우는 ? [3 3 2 2 0] count를 배열 형태? 객체 형태로? 상당히 골치아플 듯

    // 조건이 현재 상태에 해당 되는 것이 되어야하는 게 아니라 더해졌을 때 조건이 충족되어야함

    // answer의 최대값은 citations의 length.
    
    return answer;
}
