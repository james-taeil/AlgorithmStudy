const stack = []
let last = 0;
let answer = "";


const command = {
  push : function(arg){
    stack[last] = arg;
    last ++;
  },
  pop : function(){
    if (last > 0){
    last --;
    return stack.splice(-1);
  } else{
    return -1;
  }},
  size : function(){
    return last;
  },
  empty : function(){
    if (last > 0){
      return 0;
    }
    else{
      return 1;
    }
  },
  top : function(){
    if(last > 0){
      return stack[last-1];
    }
    else{
      return -1;
    }
  }
};


const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];

rl.on("line",function(line){
  input.push(line);
}).on("close",function(){
  input.map((line)=>{
      const operation = line.split(" ");
          if(operation[0] === "push"){
              command[operation[0]](parseInt(operation[1]));
          }else if(
          operation[0] === "pop" ||
          operation[0] === "size" ||
          operation[0] === "empty" ||
          operation[0] === "top"
          ){
          answer += command[operation[0]]() + "\n";
        }
      });
      console.log(answer);
      process.exit();
});