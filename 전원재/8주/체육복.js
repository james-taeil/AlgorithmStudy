function solution(n, lost, reserve){
    var answer =n;
    let Lost = lost.filter(el => !reserve.includes(el)) // 주어진 배열들의 중복된 부분을 제거 
    let Reserve = reserve.filter(el=> !lost.includes(el))
    
    
    for(let i=0; i<Lost.length; i++){ // 반복문에서 요소의 인접 숫자를 체크한다. 
        let plus = Lost[i]+1        //  잃어버린 학생 번호에서 + - 해주고 
        let minuse = Lost[i]-1
        if(Reserve.includes(plus)){             // 여유분을 가지고 있는 학생의 번호와 +1 -1 차이가 날때,  
            answer++                        // 주어진 학생 수에서 ++를 해주고    
            let idx=Reserve.indexOf(plus)   // 여유분을 가진 학생의 번호를 배열에서 제거 => 중복요소 삭제
            Reserve.splice(idx,1)
        }else if(Reserve.includes(minuse)){
            answer++
            let idx=Reserve.indexOf(minuse)
            Reserve.splice(idx,1)
        } 
    }
    return answer-Lost.length // 학생수(n) + 대체 가능한 체육복 수 - 잃어버린 학생 수 
}
