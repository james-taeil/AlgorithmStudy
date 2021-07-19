function solution(n, lost, reserve) {
    let answer = 0;
    let minus = lost.length;
    
    for (let i=0; i<lost.length; i++){
        for (let j=0; j<reserve.length; j++){
            if (lost[i] === reserve[j]-1 || lost[i] === reserve[j]+1){
                reserve.splice(j--,1);
                minus--;
                break;
            }
        }
    }
    answer = n - minus;
    
    return answer;
}
