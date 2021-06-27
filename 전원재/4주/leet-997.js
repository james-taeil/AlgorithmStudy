var findJudge = function(n, trust) {
    if(n===1&&trust.length===0){
        return 1
    }
    let obj ={} 
    let obj2={}
    for(let i of trust){
        let k= i[1]
        let x = i[0]
        if(obj[k]=== undefined){
            obj[k]=0
            obj2[x]=0
        }
        obj[k]++
        obj2[x]++
     }
    let trustNum = Object.keys(obj).filter(el => obj[el]===n-1)
   
    let y = Object.keys(obj2)
    if(trustNum.length===0|| y.includes(trustNum[0].toString())){
        return -1
    }else{
        return parseInt(trustNum) 
    }
};


////////////////// 깔끔해 보이는 답
const findJudge = function (N, trust) {
    if (N === 1) return 1;
  
    const tab = new Array(N + 1).fill(0);
  
    for (let [i, j] of trust) {
      tab[i] -= Infinity; // if i trusts someone => disqualified
      tab[j] += 1; // => count how many people trust j
    }
  
    return tab.indexOf(N - 1); // judge will be trusted by everyone except 1 (self)
  };