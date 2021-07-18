// 타겟 넘버가 되는 조합의 수
function solution(numbers, target) {
    var answer = 0;


    const dfs=(count, sum)=>{
        if(count ===numbers.length){
            if(sum===target){
                answer++
            }
            return
        }


        dfs(count+1, sum+numbers[count]);
        dfs(count+1, sum-numbers[count]);

    }
    dfs(0,0)
    return answer
}