//처음에 풀었을 때 틀린 답 입니다. 

function solution(n, edge) {
    edge = edge.map(el=> el.sort())
    var answer = 0;
    let arr =[]
    let sec = ""
    for(let i=0; i<edge.length; i++){
        if(edge[i][0]===1){
          sec += edge[i][1]
        }
        if(edge[i][0] !==1){
            arr.push(edge[i])
        }
    }
    
   
    const diff = (word, newar)=>{
      
  let arr2 =[]
    let sec2 = ""
   //console.log(newar)
       for(let ar of newar){
         
         if(word.includes(ar[0])){
            sec2 += ar[1]
         } 

        if(!word.includes(ar[0])&&!word.includes(ar[1]))
           arr2.push(ar)
       }
       
       if(arr2.length===0){
         return newar
       }else{
         return diff(sec2, arr2)
       }
    }
    let result = diff(sec, arr)
    let sec3=""
    for(let v of result){
      if(!sec3.includes(v[0]))
      sec3 += v[0]
    }
    let last =[]
    for(let v of result){
      if(!sec3.includes(v[1]))
      last.push(v)
    }
  let lastword=""
    for(let v of last){
      if(!lastword.includes(v[1]))
      lastword += v[1]
    }
  
    console.log(lastword)
    
    
    return lastword.length
}
let a = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
console.log(solution(7, a))

// 배열 안의 숫자를 정렬해서 뒷자리 숫자를 더 찾기 쉽게 만들어서 
// 재귀함수로 돌리는데, 3,2 의 다음 자리 숫자를 찾을 때 어떤 문제가 생겨서 그걸 해결하려하면 계속 무한반복이 됐습니다.
// 런타임 에러와 여러가지 실패 통과되지 않았습니다.


