//주어진 배열 array 와 2차원 배열 commands, commands 안의 배열 세 개의 요소를 가지는데, 
// 첫번째 요소는 시작 인덱스, 두번째 요소는 끝 인덱스로 array를 자르고  정렬을 해서 거기에 세번째 요소를 인덱스로 가지는 수를 리턴합니다. 
// slice와 비슷 다른 점은 0이 아닌 1부터 시작함, 길이를 기준으로 자르는 것  그러므로 command의 첫번째 요소에서 -1을 해야함
// 두번째 요소는 slice의 성격상 원래 두번째 요소 이전의 인덱스 까지 리턴함으로 -1을 따로 해줄 필요가 없습니다.
function solution(array, commands) {
    var answer = [];  //빈 배열을 만듭니다.
        commands.map(el=>{  // command 안의 배열의 개수만큼만 반복하면 됨으로 map을 사용합니다.
            const newArr = array.slice(el[0]-1, el[1]).sort((a,b)=>a-b) // 이때 얻어진 배열을 정렬합니다.
                answer.push(newArr[el[2]-1]) // answer에 2차원 배열의 세번째 요소를 넣어주는데, 인덱스를 적용해야함으로
                                                //길이로 표시된 수에서 -1을 합니다.
             })
    return answer;
}
/// 다른 분의 정답 구조분해할당을 사용한 부분이 인상적이라서 가져와 봤습니다. 
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}