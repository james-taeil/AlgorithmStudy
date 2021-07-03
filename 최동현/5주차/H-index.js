function solution(citations) {
    citations = citations.sort((a,b)=> b-a);
    let idx = 0;

    while(idx+1 <= citations[idx]){
        idx ++
    }
    return idx;
}