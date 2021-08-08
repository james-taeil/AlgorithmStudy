function solution(absolutes, signs) {
    var answer = 0;
    
    // absolutes 만큼 반복하면서 signs에 맞는 조건에 따라 합 or 차
    for (let i=0; i<absolutes.length; i++){
        if (signs[i]===true){
            answer += absolutes[i];
        }
        else {
            answer -= absolutes[i];
        }
    }
    return answer;
}
