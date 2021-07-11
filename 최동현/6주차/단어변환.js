function solution(begin, target, words) {
    let answer = 0
    const queue = []
    const visited = Array(words.length).fill(false)

    queue.push([begin, answer])

    while(queue.length){
        let [current, count] = queue.shift();
        if (current === target) return count;

        words.forEach((letter, i) => {
            const differentIdx = [...letter].reduce((acc,cur,i) =>(cur !== current[i] ? acc.push(i) : acc, acc), []);

            if (differentIdx.length === 1 && !visited[i]){
                visited[i] = true;
                queue.push([letter, ++count])
            }
        })
    }
    return answer
}


console.log(solution("hit", "cog" ,["hot", "dot", "dog", "lot", "log", "cog"]))