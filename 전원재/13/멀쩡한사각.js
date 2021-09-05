function solution(w, h) {
    var answer = w*h;
    // 간단한 그래프를 그려보면 점화식을 만들 수 있다 
    // y= -ax+b 의 구조로 그래프가 그려지는 데 이 때의 x값과 y값으로 
    // 그래프가 어떤 영역을 지나는 지 분석하면 답을 구할 수 있다.
    const multi = w*h
    if(w===0 || h===0 || w===1|| h===1) return 0
    
    let  x;
    let  y;
if(h===w) return multi-h
    
    if(h>w){
      x= w
      y = h 
    }else{
      x = h
      y = w
    }
    let a= y/x
    let b = y
    const yPos = (n)=>{
        return a*n+b
    }
   
    
    let sum=0
    for(let i =0; i<x; i++){
        sum += Math.ceil(yPos(i+1))-Math.floor(yPos(i))
    }
    
    return answer-sum;
}