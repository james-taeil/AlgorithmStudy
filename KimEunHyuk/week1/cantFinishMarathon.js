function solution(participant, completion) {
    let answer = '';
    
    for (let i=0; i<participant.length; i++){
        for (let j=0; j<completion.length; j++){
            if (participant[i]===completion[j]){
                participant.splice(i--, 1);
                completion.splice(j--,1);
                break;
            }
        }
    }
    answer = participant[0];
    return answer;
}
