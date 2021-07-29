function solution(d, budget) {
    let result = 0;
    
    // 신청예산 배열을 오름차순으로 정렬
    d.sort((a,b)=> a-b);
    
    // 지원할 수 있는 부서수를 카운트하며 반복
    let i = 0;
    while(result<=budget) {
        result += d[i];
        i++;
    }
    return i-1;
}
