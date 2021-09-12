function solution(p) {
    if(p.length===0) return ""
    
    // toy 문제에 괄호에 관련된 것이 있어 비슷할 거라 생각했지만 변환하고 
    // true, false 체크하는 것은 완전히 달랐다.
function check(str){  // toy 문제와 똑같이 주어진 괄호들이 올바르게 
                    // 배열되었는 지를 판단
        const stack =[]
    
        const obj ={
        "(":")"
    }

    for(let i=0; i<str.length; i++){
        if(str[i]=="("){
            stack.push("(")
        }else if(str[i]==")"){
            let temp = stack.pop()
            if(obj[temp]!==str[i]){
               return false
            }
        }
    }
    return stack.length===0
    }
    //만약 주어진 괄호들이 알맞게 배열되었다면 그냥 리턴하고 ]
    // 아니면 아래 함수를 통해 교정한다.

    
    const isFix = (str)=>{
        let stack=""
        
        let open =0
        let close=0

        let isOk = true //괄호들이 맞게 배열되어있는 지 확인
        
        if(str.length===0) return "" // 범위를 초과 했거나 할 경우 
                                    // 빈 문자열 값을 여기서 리턴하지 않으면 
                                    // 나중에 undefind가 출력된다. 

        for(let i=0; i<str.length; i++){  //반복문  

            if(str[i]=="(") open++  
            if(str[i]==")") close++

            if(open<close) isOk = false // 닫히는 괄호가 더 많으면 틀린 괄호열
            
            if(open==close){ // 균형잡힌 괄호 문자열이 됐을 때 

                if(isOk===false){ // 괄호들의 배열이 맞지 않으면
                                // 설명 대로 앞뒤로 괄호를 넣어주고 중간에 
                                // 변환된 괄호열을 넣어준다.
                    stack+="("
                    stack+=isFix(str.slice(i+1, str.length)) 
                    stack+=")"
                    
                    for(let j=1; j<i; j++){ // 그리고 그 이전의 괄호열은  
                                            // 앞뒤를 제거하고 
                                            // 반전을 해서 그 뒤에 붙여준다.
                      
                       if(str[j]=="("){
                       stack+=")"
                       }else if(str[j]==")"){
                         stack+="("
                       }
                    }
                  return stack
                   

                }else{ // 괄호열이 알맞게 배열되어 있었다면
                    stack+=str.slice(0,i+1) // 앞부분을 그냥 넣어주고 
                    
                    stack+=isFix(str.slice(i+1, str.length)) // 뒷 부분은 다시 정렬한다.
                    
                   return stack
                }
                
            }
            
            
        }
        
        
        
    }

    
     return check(p)?p:isFix(p); 
}