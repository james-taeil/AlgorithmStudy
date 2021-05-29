function sort(array){
    for (let i=0; i<array.length-1;i++){
        for (let j=i+1; j<array.length;j++){
            if (array[j] < array[i]){
                let tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}

function solution(participant, completion) {
    let answer = '';
    let part = sort(participant);
    let comp = sort(completion);
    
    for (let i=0; i<part.length; i++) {
        if (part[i] !== comp[i]){
            answer = part[i];
            break;
        }
    }
    return answer;
}
