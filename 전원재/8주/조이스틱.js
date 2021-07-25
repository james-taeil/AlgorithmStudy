
function solution(name){
    var answer = 0 
    name = name.toLowerCase() // 보기 쉽게 소문자로 변환 
    const alp= "abcdefghijklmnopqrstuvwxyz"  // 아스키 코드로 바꾸는 싫어서 그냥 알파벳 문자열을 만듬
    let temp =[]

    for(let i=0; i<name.length; i++){  // 위 아래로만 움직일 때의 이동 횟수를 저장한다. 
        temp.push(alp.indexOf(name[i]));  // 반복문에서 주어진 문자열 요소들의 알파벳 순서를 빈배열에 넣어준다.  
        if(alp.indexOf(name[i])<=13){  //  인덱스가 13 보다 낮을 때는 
            answer+= alp.indexOf(name[i]) // 그냥 + 해주고 
        }else{
            answer += 26-alp.indexOf(name[i]) // 13 보다 높을 때는 뒤로 돌아가는게 빠르니까 
                                                //26 - 인덱스를 한다.
        }
    }
    let count =name.length-1  // 좌우로 움직이는 횟수 
    for(let i=0; i<temp.length; i++){ //반복문에서 요소가 a인 경우를 확인하고 값을 준다. 
        if(temp[i]==0){   // 요소가 a일 때 
            let cur = 1  
            for(let j=i+1; j <temp.length;j++){ // 현재값과 다음값을 비교한다. 
                if(temp[j]==0){ // 다음 값도 a이면 
                    cur++ 
                }else{   
                    break
                }
            }
            let left = i===0? 0: (i-1)*2; // 
            let right = left + (temp.length-cur-i)// a가 반복될 때 움직이는 최소거리 
            if(count > right) count = right
        }
    }
    return answer +count
}