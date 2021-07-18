class Stack {
    constructor () {
        this.stack = [];
        this.size = 0;
    }

    push(arg) {
        this.size++;
        this.stack = this.stack.concat(arg);
    }

    size() {
        return this.size;
    }

    pop() {
        if (this.stack.length === 0) {
            return -1
        }
        const popNum = this.stack[this.size - 1];
        this.stack = this.stack.slice(0, -1);
        this.size--
        return popNum;
    }

    empty() {
        if (this.size === 0) {
            return 1;
        } 
        else {
            return 0;
        }
    }

    top() {
        if (this.size === 0) {
            return -1;
        } 
        else {
            return this.stack[this.size - 1];
        }
    }
};

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const addStack = new Stack();
let step = parseInt(input[0])
let answer = '';

for (let i = 1; i <= step; i++) {
    let command = (input[i]).trim().split(' ');
    if (command[0] === 'push') {
        addStack.push(parseInt(command[1]));

    } else if (command[0] === 'size') {
        answer += addStack.size + '\n';

    } else if (command[0] === 'pop') {
        answer += addStack.pop() + '\n';

    } else if (command[0] === 'top') {
        answer += addStack.top() + '\n';

    } else if (command[0] === 'empty') {
        answer += addStack.empty() + '\n';
    }
};

console.log(answer);


// ! 구현 실패
// function PUSH (num) {
//   return stack.concat(num);
// };

// function TOP() {
//   if (stack.length === 0) {
//     return -1;
//   } else {
//     result = stack.slice(-1, );
//   }
//   return result;
// };

// function SIZE () {
//   return stack.length;
// };

// function EMPTY () {
//   if (stack.length === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// function POP () {
//   if (stack.length === 0) {
//     return -1;
//   } else {
//     result = stack.slice(-1, );
//     stack = stack.slice(0, -1);
//   } 
//   return result;
// };
// let commandIdx = 1
// while(stackCount--){
//   let command = input[i].split(' ');
//   if (command[0] === 'push') {
//     PUSH(command[1]);
//   } else if (command[0] === 'top') {
//     console.log(TOP());
//   } else if (command[0] === 'size') {
//     console.log(SIZE());
//   } else if (command[0] === 'empty') {
//     console.log(EMPTY());
//   } else {
//     console.log(POP());
//   }
// };