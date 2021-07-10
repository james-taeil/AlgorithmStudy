function solution(n, computers) {
    var answer = 0;
        let valid = new Array(n).fill(false) // n개의 배열을 만든다 길이에 따라 만들어지기 때문에 맞을것 아니면 +1
        let count =0 // count는 valid와 computers의 인덱스가 될 것이다.
          // valid에 false가 있는 동안
            const re=(net,n)=>{  // 함수에 들어간다. 최초 값은 0,0
                if(net.indexOf(1)===net.lastIndexOf(1)){ // 1이 하나 밖에 없으면 
                    return;   // 함수 끝
                }
                for(let i=0; i<net.length; i++){ // 루프 돌면서 
                    if(net[i]===1&& i!==n && valid[i]===false){ //만약 computer[0](net)[0]은 무조건 1이므로 제외 
                        valid[i]=true
                        re(computers[i], i)   // 아래쪽 if 문과 비슷하나 anwer은 없다. 
                               // 왜냐면 다발이 새로 생기는 것이 아니기 때문 
                    }
                }
            }
            while(valid.includes(false)){
            if(valid[count]===false){   // 만약 valid의 그 인덱스가 false 일때 valid의 인덱스는 계속 ture로 바뀐다. 
            valid[count]=true
            answer++
                re(computers[count],0) // 함수를 동작시킨다. 최최 인자는 computer0, 0
                  // 이 때 valid의 count번 인덱스 인자는 true
                    // 네드워크의 연결(트리다발)은 1만큼 증가  다발이 생기는 것
            }
            
            count++ // 끝에 다달으면 plus 
        }
        
        
    return answer;
}

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]))// =>2