const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

function doMultiply(num){
  for (let i=1; i<10; i++) {
    console.log(`${num} * ${i} = ${num*i}`);
  }
}

doMultiply(num);
