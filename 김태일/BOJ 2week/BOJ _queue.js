class Queue {
    constructor () {
        this.queue = [];
        this.size = 0;
    }

    size () {
        return this.size;
    }

    push (arg) {
        this.queue = this.queue.concat(arg)
        this.size++;
    }

    pop () {
        if (this.size === 0) {
            return -1;
        } 
        let popNum = this.queue[0];
        this.queue = this.queue.slice(1);
        this.size--;
        return popNum;
    }

    empty () {
        if (this.size === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    front () {
        if (this.size === 0) {
            return -1;
        }  else {
            return this.queue[0];
        }
    }

    back () {
        if(this.size === 0) {
            return -1;
        } else {
            return this.queue[this.size - 1];
        } 
    }
}

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const addQueue = new Queue();
let step = parseInt(input[0])
let answer = '';

for (let i = 1; i <= step; i++) {
    let command = (input[i]).trim().split(' ');
    if (command[0] === 'push') {
        addStack.push(parseInt(command[1]));

    } else if (command[0] === 'size') {
        answer += addQueue.size + '\n';
    } else if (command[0] === 'pop') {
        answer += addQueue.pop() + '\n';
    } else if (command[0] === 'empty') {
        answer += addQueue.empty() + '\n';
    } else if (command[0] === 'front') {
        answer += addQueue.front() + '\n';
    } else if (command[0] === 'back') {
        answer += addQueue.back() + '\n';
    }
};

console.log(answer);