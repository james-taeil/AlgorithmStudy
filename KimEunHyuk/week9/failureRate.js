function solution(N, stages) {
    var answer = [];
    
    // 스테이지마다 통과한 인원수
    let pass = Array(N+1).fill(0);
    // 스테이지에 도달한 플레이어 수
    let challenger = Array(N+1).fill(0);
    for (let j=0; j<stages.length; j++){
        for (let k=1; k<=stages[j];k++){
            if (k <= N)
                challenger[k]++;    
            if (k !== stages[j])
                pass[k]++;    
        }
    }
    // 실패율을 기록하는 배열
    let failRateArr = [];
    for (let i=1; i<=N; i++){
        failRateArr.push((challenger[i]-pass[i]) / challenger[i]);
    }
    // 실패율을 내림차순으로 정렬해놓은 배열
    let sortedArr = failRateArr.slice().sort((a,b)=>b-a);
    // 같은 값을 중복으로 선택하지 않게 체크하기위한 배열
    let check = Array(failRateArr.length).fill(false);
    // 정렬된 배열을 반복하면서 
    for (let i=0; i<sortedArr.length; i++){
        // 실패율 배열에서 같은 값을 만났을 때
        for (let j=0; j<failRateArr.length; j++){
            // 실패율 배열의 인덱스를 결과에 담고 체크
            if (sortedArr[i] === failRateArr[j] && check[j]===false){
                answer.push(j+1);
                check[j]=true;
                break;
            }
        }
    }
    return answer;
}
