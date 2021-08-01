function solution(strings, n) {
    let shortest = strings[0];

    // 가장 짧은 문자열을 가져옴
    for (let i=1; i<strings.length; i++){
        if (shortest > strings[i])
            shortest = strings[i];
    }

    // 가장 짧은 문자열의 길이부터 n까지 줄어들면서 정렬
    // n번째 아스키 코드를 기준으로 정렬
    for (let i=shortest.length; i>=n; i--){
        strings.sort((a,b) => a.charCodeAt(i)-b.charCodeAt(i));    
    }
    return strings;
}
