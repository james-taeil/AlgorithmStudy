// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


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

const addStack = new Stack();

addStack.push(5);
addStack.push(4);
addStack.push(3);
console.log(addStack.pop());
console.log(addStack.empty());
console.log(addStack.top());


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

