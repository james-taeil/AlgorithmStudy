function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => b-a);

    for (let el of citations){
        if (el >= answer && el !== 0)
            answer++;
        else {
            break;
        }
    }
    // 1 1 0 을 입력받았을 때, 1을 리턴해야하는데 2를 리턴하고 있음.
    return answer;
}
