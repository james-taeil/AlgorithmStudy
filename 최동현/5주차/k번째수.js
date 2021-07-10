function solution(array, commands) {
    var answer = [];
  
    for (let i = 0; i<commands.length;i++){
      let startCmd = commands[i][0]-1;
      let endCmd = commands[i][1];
      let targetCmd = commands[i][2]-1;
  
      let sorted = array.slice(startCmd,endCmd);
      sorted.sort((x, y) => x-y);
      answer.push(sorted[targetCmd]);
      }
      return answer
  }