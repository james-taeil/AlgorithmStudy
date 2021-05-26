const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let year = Number(input);

function isLeapYear(year){
  let bool = 0;
  if (year % 4 === 0) {
    bool = 1;
  }
  if (year % 100 === 0) {
    bool = 0;
  }
  if (year % 400 === 0) {
    bool = 1;
  }
  return bool;
}
console.log(isLeapYear(year));
