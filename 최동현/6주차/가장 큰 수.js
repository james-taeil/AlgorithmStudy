function solution(numbers){
    console.log(numbers.map((item)=> item.toString()).sort((a,b) => (b+a)-(a+b)))
    let answer = numbers.map((item)=> item.toString()).sort((a,b) => (b+a)-(a+b)).join("");
    return answer.replace(/^0+/, "0");
}


console.log(solution([3, 30, 34, 5, 9]))
