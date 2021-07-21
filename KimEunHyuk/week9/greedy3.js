function solution(number, k) {
    var answer = '';
    
    // k번 반복하면서 반복할 때마다 지웠을 때 가장 큰 수를 유지한다
    for (let i=0; i<k; i++){
        number = findMax(number);
    }
    return number;
}

function findMax(str){
    // str으로 채워진 배열 선언
    let arr = new Array(str.length).fill(str);
    
    // str의 한 글자를 제거한 경우를 모두 담게 만듦
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].split('');
        arr[i].splice(i,1);
        arr[i] = parseInt(arr[i].join(''));
    }
    
    // 그중 가장 큰 값을 가져감
    str = arr.reduce((max, item) => {
        if (max < item)
            return item;
        else return max;
    }, 0) + '';
    
    return str;
}
