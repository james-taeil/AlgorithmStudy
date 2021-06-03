const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input[0]);
const arr = [];
let str = '';

function push(array, n){
  array[array.length] = n;
}

function pop(array){
  if (array.length === 0){
    str += '-1\n';
  }
  else {
    str += `${array[0]}`;
    array = array.splice(0,1);
  }
}

function size(array){
    str += `${array.length}\n`;
}

function empty(array){
    if (array.length === 0){
        str += '1\n';
    }
    else {
        str += '0\n';
    }
}

function front(array){
    if (array.length === 0){
        str += '-1\n';
    }
    else {
        str += `${array[array.length-1]}\n`;
    }
}

function back(array){
  if (arr.length === 0){
    str += '-1\n';
  }
  else {
    str += `${array[0]}\n`;
  }
}

function queue(num) {
  for (let i=1; i<=num; i++){
    let toDo = input[i].split(' ');
    if (toDo[0] === 'push'){
      push(arr, todo[1]);
    }
    else if (toDo[0] === 'pop'){
      pop(arr);
    }
    else if (toDo[0] === 'size'){
      size(arr);
    }
    else if (toDo[0] === 'empty'){
      empty(arr);
    }
    else if (toDo[0] === 'front'){
      front(arr);
    }
    else if (toDo[0] === 'back'){
      back(arr);
    }
  }
  console.log(str);
}

queue(num);
