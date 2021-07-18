function solution(numbers) {
    
    let result =[]
    
    const isValid =(n)=>{ // 소수 판별 
        if(isNaN(n)) return false
        if(n<2) return false
        if(n===2) return true
        if(n%2===0) return false
    const quart = Math.floor(Math.sqrt(n))
    for(let i=3; i<=quart; i+=2){
        if(n%i===0){
            return false
        }
        
    }
        return true
    }
     
    const recur=(idx,sum, num,test)=>{ //dfs 방식  
        if(idx===num.length) return; // 탈출 조건이 조금 허술하다. 좀 더 정확하게 바꿔야할 것 같다. 
        
        let veSum = parseInt(sum) // 문자열을 숫자로 바꿈
        if(isValid(veSum)){  // 소수이면 푸시
            result.push(veSum) 
        }
        
            for(let i =0; i<num.length; i++){ //반복문 재귀로 dfs 모든 숫자의 조합을 뒤진다.
                if(test[i]===true) continue
                test[i]=true
                    let k = recur(idx+=1,sum.concat(num[i]), num, test)
                test[i]=false
            }
            
        
    }
    recur(-20,  "", numbers, Array(numbers.length).fill(false))// 재귀할 횟수, 조합될 숫자들의 합, 인풋 배열, test배열
        result = [...new Set(result)] // 중복 제거
    return result.length;
}


// 비슷하게 dfs방식을  푸신 다른 분의 답
////////////////////////////////////
function solution(numbers) {
    var answer = 0;
    var set = new Set(); // set 객체를 사용
    var value = [];    
    var visited = Array(numbers.length).fill(false) // 검사할 배열을 만들고 
    for (let i=1; i<=numbers.length; i++) {
        dfs(0, i); // 인풋 배열의 길이 만큼 함수 호출  
    }

    function dfs(cur_len, len) { // 0, 1 로 시작 
        if (cur_len === len) { // 주어진 길이와 같아지면 탈출 
            set.add(parseInt(value.join(''))); // set에 합쳐진 값을 추가 
            return;
        }
        for (let i=0; i<numbers.length; i++) {
            if (!visited[i]) { // 방문한 적이 없으면 
                value.push(numbers[i]) // 배열에 인풋 배열의 i번째 인자를 넣는다. 
                visited[i] = true; // 방문 기록 
                dfs(cur_len + 1, len); // 재귀 하면서 자릿수에 따른 문자를 완성
                visited[i] = false; // 지나온 길을 다시 false 처리해서 다음 자릿수의 재귀일 때도 지날 수 있게 
                value.pop() // set 객체로 넘어가고 배열의 끝 요소를 뺀다. 
            }            
        }
    }
    answer = [...set].filter(n => {// filter 함수로 set을 배열화해서 
        if (n < 2) return false     //소수 판별
        for (let i=2; i<=Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true
    })
   // console.log(answer)
    return answer.length;
}