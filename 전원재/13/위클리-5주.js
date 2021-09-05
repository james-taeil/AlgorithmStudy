function solution(word) {
    var answer = 0;
    const letter = "AEIOU"
    
    let result=0
    for(let i=0; i<word.length; i++){
     let idx = letter.indexOf(word[i])
     
     if(idx===0){
         result+=1
         continue
     }
     if(i===0){
         result+= idx*781+1
     }
     if(i===1){
         
         result+= idx*156+1
     }
        if(i===2){
         result+= idx*31+1
     }
        if(i===3){
         result+= idx*6+1
     }
        if(i===4){
         result+= idx*1+1
     }
    }
    return result;
}