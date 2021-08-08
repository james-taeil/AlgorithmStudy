function solution(progresses, speeds) {
    var answer = [];
    
    // 100- 진행 퍼센트 나누기 진행 속도를 하면 언제 출시되는 지 날짜를 알 수 있다. 
    let arr=progresses.map((el,i)=>Math.ceil((100-el)/speeds[i]))
    
     let pivot= arr[0] // 기준 숫자 날짜 배열의 첫번째 요소 

    let num =1 // 그 날짜에 출시될 제품의 개수  

    for(let i=1;i<arr.length;i++){ // 날짜 배열을 돌면서 크기 비교
        if(pivot<arr[i]){ // 작으면 
            answer.push(num) // 축적된 개수를 answer에 푸시 
            pivot=arr[i] // 기준 숫자 재할당
            num=1 // 개수는 다시 초기화
        }else{
            num++ // 크면 개수만 늘리고 출시는 하지 않는다. 
        }
    }
    answer.push(num) //마지막으로 요소는 비교할 것이 없이 끝나서 그냥 
                    // 개수를 넣어주면 됨
                           
    return answer;
}