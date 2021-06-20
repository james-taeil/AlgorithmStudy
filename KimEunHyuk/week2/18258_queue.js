const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();

class Queue {
  constructor () {
    this.queue = [];
  }

  push(num) {
    if (num === undefined){
      return false;
    }
    this.queue[this.queue.length] = num;
  }

  pop() {
    if (this.queue.length === 0) {
      return -1;
    }
    let popedNum = this.queue[0];
    this.queue.splice(0, 1);

    return popedNum;
  }

  size() {
    return this.queue.length;
  }

  empty() {
    return this.queue.length ? 0 : 1;
  }
  
  front() {
    if (this.queue.length <= 0) {
      return -1;
    }
    let frontNum = this.queue[this.queue.length-1];
    return frontNum;
  }

  back() {
    if (this.queue.length <=0) {
      return -1;
    }
    let backNum = this.queue[0];
    return backNum;
}

const queue = new Queue();

const str = input.reduce((pre, cur) => {
  if (cur.includes('push')){
    const num = cur.split(' ')[1];
    queue.push(num);
  }
  else if (cur.includes('pop')) {
    pre += queue.pop() + "\n";
  }
  else if (cur.includes('size')) {
    pre += queue.size() + "\n";
  }
  else if (cur.includes('empty')) {
    pre += queue.empty() + "\n";
  }
  else if (cur.includes('front')) {
    pre += queue.front() + "\n";
  }
  else if (cur.includes('back')) {
    pre += queue.back() + "\n";
  }
  return pre;
}, '');

console.log(str);
