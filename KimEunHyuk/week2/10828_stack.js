const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();

class Stack {
  constructor () {
    this.stack = [];
  }

  push(num) {
    if (num === undefined){
      return false;
    }
    this.stack[this.stack.length] = num;
  }

  pop() {
    if (this.stack.length === 0) {
      return -1;
    }
    let popedNum = this.stack[this.stack.length-1];
    this.stack.splice(this.stack.length-1, 1);

    return popedNum;
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.stack.length ? 0 : 1;
  }
  
  top() {
    if (this.stack.length <= 0) {
      return -1;
    }
    let topNum = this.stack[this.stack.length-1];
    return topNum;
  }
}

const stack = new Stack();

const str = input.reduce((pre, cur) => {
  if (cur.includes('push')){
    const num = cur.split(' ')[1];
    stack.push(num);
  }
  else if (cur.includes('pop')) {
    pre += stack.pop() + "\n";
  }
  else if (cur.includes('size')) {
    pre += stack.size() + "\n";
  }
  else if (cur.includes('empty')) {
    pre += stack.empty() + "\n";
  }
  else if (cur.includes('top')) {
    pre += stack.top() + "\n";
  }
  return pre;
}, '');

console.log(str);