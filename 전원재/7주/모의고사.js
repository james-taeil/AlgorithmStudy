function solution(answers) {
    var answer; // undefined
    let first = "12345" // 문자열로 정의해줌
    let second ="21232425"
    let third= "3311224455"
    let firstNum=0 // 각 학생의 맞은 개수 
    let secondNum=0
    let thirdNum=0

    //루프돌면서 맞힌 개수 체크
    for(let i=0; i<answers.length; i++){
        let t = answers[i]
        let f = first[i%first.length]
        let s  = second[i%second.length]
        let th = third[i%third.length]
        
        if(t==f){
            firstNum++
        }
        if(t==s){
            secondNum++
        }
        if(t==th){
            thirdNum++
        }
    }
    // 모두 같을 때
    if(firstNum===thirdNum &&thirdNum===secondNum){
        answer=[1,2,3]
    }else if(firstNum===thirdNum){
        answer=[1,3]
    }else if(firstNum===secondNum){
        answer=[1,2]
    }else if(secondNum===thirdNum){
        answer=[2,3]
    }
    
     if(firstNum>thirdNum &&firstNum>secondNum){ 
        answer=[1]
    }else if(firstNum<thirdNum &&thirdNum>secondNum){
        answer=[3]
    }else if(firstNum<secondNum &&thirdNum<secondNum){
        answer=[2]
    }
    
    
    
    return answer;
}