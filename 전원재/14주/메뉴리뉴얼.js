function solution(orders, course) {
    var answer = [];
    let obj={}
  

 const getCombination = (arr, n) => { // 기본 조합 알고리즘
        const result = [];
        if(n === 1) return arr.map(e => [e]);
        arr.forEach((e, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combinations = getCombination(rest, n-1);
            const attached = combinations.map(combi => [e, ...combi]);
            result.push(...attached);
        });
        return result;
    }
 

  orders.map((el,idx)=>{

    const word = el.split("").sort() // 개별적으로 알파벳 순으로 배열시킨다.

    for(let v of course){  

      if(word.length<v) break // orders 요소의 길이를 초과하면 break

      let combi=getCombination(word,v)  // 주어진 course 개수에 따라 알파벳을 조합한다.

      combi.map(k=>{ // 
        let str = k.join("") // word 조합을 만들고 
                            // 조합이 똑같이 나오는 경우 +1 을 해준다.
                            // undefined의 경우는 1을 할당한다. 
        obj[str]=obj[str]?obj[str]+1:1
    })
    }
  })

let keys = Object.keys(obj) // 이제 만들어진 obj의 키를 배열로 만들고
                            // 그 값의 크기를 비교하여 글자의 개수 별로(course의 요소들) 
                            // 가장 큰 값을 가져온다
for(let i=0; i<course.length; i++){
  let max=0
  let filtered=keys.filter(el=>{  // course에 맞는 단어의 길이를 찾고 
                                    // 단어를 가져와 가장 큰 value를 구하고
                                    // 결과값에 할당

    if(el.length===course[i]&&obj[el]>1){ // value는 course의 i 번째 요소와 같고
                                        // 1 보다 커야함
      if(obj[el]>max){
        max=obj[el]
      }
      return true
    }
    })

   let temp= filtered.filter(el=>obj[el]===max) // 필터된 값들을 가져와서 
                                    // 가장 큰 값을 가진 키를 결과값에 넣어주면 끝
//console.log(max)
  answer.push(...temp)
  
}

    return answer.sort();
}