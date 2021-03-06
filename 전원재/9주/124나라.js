// 10진법을 3진법으로 치환하는 개념으로 접근
// 다만 대응 되는 숫자가 1= 1, 2= 2,3= 4 이기 때문에 약간의 혼란이 있을 수 있음
//124숫자의 구성

10   [1,2,3,4 ,5 ,6 ,7 ,8 ,9 ,10,11,12,13]
124  [1,2,4,11,12,14,21,22,24,41,42,44,111]
3    [1,2,10,11,12,20,21,22,100,101,102]

// 10진법과 3진법을 비교해보면 3으로 나누어 떨어지는 숫자는 반드시 0을 가진다 
// 124 진법과 3 진법을 비교해보면 4가 들어가는 숫자는 반드시 0을 가진다.


function solution(n) {
    var answer = '';
    const num = [4,1,2] // 4를 0 취급해서 앞에 넣어줌

    for(let i=0; 0<n; i++){ // 반복문에서 
        if(n%3===0){  // 나누어 떨어지면 
            answer = num[0] +answer // 4를 문자화해서 더해준다
            n = n/3-1 //  자릿수가 바뀌기 때문에 -1을 해주는데 이건 0이 없는 수체계를 사용해서 그런 것 같다.
        }else{    // 나누어 떨어지지 않으면 
            answer = num[n%3] + answer  // 나머지를 인덱스로 한 num요소를 추가  
            n = Math.floor(n/3) // n 을 재할당
        }
    }
    return answer;
}