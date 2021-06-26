/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    //만약 N이 1인 경우 1을 리턴
    if(N === 1) return 1;
    //N만큼의 배열을 요소는 0으로 해서 생성  
    const count = new Array(N).fill(0)
    // [1,2]의 경우 1인사람이 2인 사람을 신뢰하는 것이기때문에
    // 구조분해 할당하여
    // 1인 사람 --
    // 2인 사람 ++ 하는 식으로
    for (let pair of trust) {
      const [a, b] = pair;
      count[a - 1]--
      count[b - 1]++
    }
    // 배열을 순회해서 count요소의 값이 N-1인 경우 index+1을 해서 리턴
    // 왜냐하면 판사는 자기 자신을 제외하고 사람들이 다 좋아하니깐!
    for (let i = 0; i < count.length; i++) {
      if (count[i] === N - 1) {
        return (i + 1)
      }
    }
    // 그 마을에 사람들만 있어서 -1
    return -1
      
  };

  findJudge(3, [[1,3],[2,3]]);
