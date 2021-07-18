// 틀린 풀이
// 처음에 풀었을 때 yello 타일을 기준으로 하는 지 모르고 그냥 
// 곱해서 타일개수의 합이 되는 가로 세로 값의 차를 구하고 
// 그 최소 값을 구한다.
// 그러니까 brown 과 yellow의 합이 12라고 할 때
// [1,12], [2,6], [3,4] 라는 배열이 나오는 데 여기서 이 값들의 차를 배열로 만들면
// [11], [4], [1] 여기서 1이라는 최솟값을 가진 [3,4]의 배열이 결과값이 된다. 

function solution(brown, yellow) {
    var answer;
    const sum = brown + yellow // 합 도형의 넓이 
    const half = Math.floor(sum/2) // 반 
    let arr = []
    for(let i=1; i<=half; i++){ //  반복문에서 합의 반까지  
        for(let j=1; j<=half; j++){ // 숫자를 뽑아서 곱해준다.
            if(j*i===sum){            // 그리고 합과 같은 지 비교한다.
                arr.push([j,i])  // 같으면 배열을 넣는다.
            }
        }
    }
    let minArr=arr.map(el=>Math.abs(el[0]-el[1])) // 2차원 배열의 차를 배열로 구해준다.
    let min = Math.min(...minArr)// 최솟값을 구하고 
    let idx = minArr.indexOf(min) // minArr의 최솟값의 인덱스를 
    answer = arr[idx]  // 처음에 만든 2차원 배열에 적용한다.
    return answer;
}


////////////
// ---

function solution(brown, yellow) {
    let sum = brown+ yellow
    let half = Math.floor(sum/2) // 반까지만 비교해준다. 그 이상이면 순서만 다를 뿐 같은 숫자가 된다.
    
    for(let i=1; i<=half; i++){ 
        if(yellow%i!==0) continue // yellow/i 해서 나누어 떨어지지 않으면 스킵 
        // sum과 yellow는 비례관계이기 때문에 그 점을 이용해서 푼다.
        if((yellow/i+2)*(i+2)===sum) return [yellow/i+2, i+2] 
    }
   
}


// 세번째는 이 카펫의 가로 세로를 구하는데 어떤 규칙이 있을 것 같아서 그렇게 풀어 보려고 했다. 



function solution(brown, yellow) {
    var answer;
    
    function isValid(n){
        if(n<1) return false
        if(n<=3) return true
        if(n%2===0) return false
        let loot = Math.floor(Math.sqrt(n))
        for(let i=3; i<=loot; i+=2){
            if(n%i===0) return false
        }    
        return true
    }

    
    const sum = brown + yellow
    let width = Math.floor(Math.sqrt(yellow))+2
    if(yellow%2===0&&isValid(yellow/2)){
        width=4
    }
    if(isValid(yellow)){
        width=3
    }

    return [sum/width, width];
}