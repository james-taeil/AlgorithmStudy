//정규표현식을 이용한 코드
//간단하게 2번 반복되는 단어들을 찾아서 제거하고 만약에 제거를 하고 제거 할 것이 없을 때 까지 반복한다.
//효율성 테스트에서 떨어졌다. 

function solution(s)
{
    
    let words = s.replace(/(\w)\1/g,"") // 정규표현식으로 한번 제거해주고                               
    // 어떤 문자가 있고 그게 1번 반복되면 찾아내는 정규표현식 , 한 개가 더 있으면 
    /// "acdd" d가 한번 반복되는 문자열 
    //  "acddd" d가 두번 반복되는 문자열 
    
    while(true){ // 이 과정을 반복하면서 
                // 문자열이 0이 되면 1을 출력하고 
        if(words.length===0) return 1
        let temp = words.replace(/(\w)\1/g,"")
        
        if(words===temp){ // 제거된 문자열과 그 전의 문자열이 같다면 
                            // 즉, 제거될 것이 더 이상 없을 경우 0을 출력
            return 0
        }else{
            words = temp
        }
        
    }

}
```

결국 스텍을 이용하는 방법을 찾아서 쓰게 되었다.

스택 배열을 변수로 만들고 거기에 요소들을 하나하나 쌓아 올린다.
- 주어진 문자열에 0번째 인덱스의 요소는 스택 배열에 넣어 준다.
for (주어진 문자열의 길이 만큼)
- 1번 인덱스 부터 끝까지 문자열을 돌아본다. 
만약에 스택의 마지막 요소와 같으면 스택의 마지막 요소를 제거하고 다음으로 넘어간다.
만약 같지 않으면 스택에 넣어주고 다음으로 넘어간다. 
"avvdsedde" 가 있으면

stack =[a] 로 시작 
stack =[av] v기 a와 다르니까 들어감
stack=[a] v가 다음 요소와 일치하니까 마지막 요소였던 v가 나감
stack =[ad] d가 들어옴
stack = [ads] d와 s가 일치하지 않으니까 들어옴
stack = [adse] e가 들어옴
stack = [adsed] d 가 들어옴
stack =[adse] d가 다음 요소와 일치하니까 제거하고 넘어감
stack =[ads] 마지막 요소 e가 다음 요소와 일치하니까 제거됨
```

function solution(s)
{

    let stack =[s[0]] // 첫번째 요소 부여 
    
    for(let i=1; i<s.length; i++){ // 첫번째 인덱스부터 반복 s의 길이 만큼
        if(stack[stack.length-1]!==s[i]) stack.push(s[i]) // 같지 않음면 들어가고 
        else stack.pop() //마지막 요소와 같으면 마지막 요소만 제거
    }

    return stack.length >0? 0:1; // 문자열이 완전히 제거 되었을 떄(stack이 0일때 1 아니면 0)
}

//정규표현식을 사용하는 방법이 제일 빠를 줄 알았는데, 그렇지 않았다. 많은 공부가 필요한 것 같다.

