// H-index란 어떤 과학자가 발표한 논문 n편 중, 
// h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
// 이 말은 주어 진 배열을 정렬했을 때 어떤 요소가 3이고 그 인덱스로 부터 끝까지의 길이가 3이 되어야 한다는 말입니다. 
// length - index를 하면 그 인덱스의 요소를 포함 끝 까지의 길이를 구 할 수 있습니다. 

function solution(citations) {
    citations = citations.sort((a,b)=>b-a) // 편의를 위해 내림차순으로 배열되게 하였습니다.
    let lastIdx = citations.length-1  // 마지막 인덱스를 구하는 건 비교를 위함입니다. 
    
    if(citations.length===1){  //몇가지 기본 조건을 추가 합니다. 
        return citations[0]===1?1:0 // 배열의 길이가 1일때 요소가 1이면 1을 0이면 0을 리턴합니다. 
    }
    
    if(citations[lastIdx] >= citations.length){  // 마지막 인덱스 요소의 값(배열에서 가장 작은 수)이 전체 배열 길이 보다 크면 
        return citations.length    // 길이를 리턴해야 한답니다. 이 부분이 이해가 가지 않아서 오래 걸렸습니다.  
    }
            
    // let filtered = citations.filter(el=>el<citations.length-1) 
    // // 이 부분은 위의 부분과 유사한데 배열 안의 요소 중에 길이  보다 작은 수가 없으면  
    // if(filtered.length===0){         // 0을 리턴한다 인데 사실 filter을 쓸필요도 없었고
    //     return 0                     // 0이 아닌 length를 리턴하는 것이었습니다.
    // }
    
    let idx=0
        while(idx<=lastIdx){        //배열을 다 순회할 동안
            if(citations[idx] <= idx){ // 요소가 인덱스보다 작거나 같으면  
            return idx              // idx를 리턴합니다. 저는 요소를 리턴하는 줄 알았는데 그게 아니었습니다.
            }
            idx++
        }
        
}