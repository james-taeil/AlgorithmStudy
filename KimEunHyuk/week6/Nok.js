function solution(array, commands) {
    let answer = [];
    
    // commands의 길이만큼 반복
    for (let el of commands){
        // el의 0번 인덱스 값부터 1번 인덱스 값까지 array에서 자르기
        let arr = array.slice(el[0]-1, el[1]);
        // 정렬 후에 원하는 값 결과 배열에 푸시
        arr = arr.sort((a,b)=> a - b);
        answer.push(arr[el[2]-1]);
    }
    return answer;
}
