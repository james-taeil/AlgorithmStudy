// LPS 배열 구하는 함수
const makeTable = (pattern) => {
  let patternLength = pattern.length;
  let table = Array(patternLength);
  table[0] = 0;
  let j = 0;
  for (let i=1; i<patternLength; i++){
    while(j>0 && pattern[i] !== pattern[j]){
      j = table[j-1];
    }
    if (pattern[i] === pattern[j]){
      table[i] = ++j;
    }
    else {
      table[i] = table[j];
    }
  }
  return table;
}
// a b a c a a b a 
// 0 0 1 0 1 1 2 3

const KMP = (str, pattern) => {
  const table = makeTable(pattern);
  const sLen = str.length;
  const pLen = pattern.length;

  let j = 0;
  for (let i=0; i<sLen; i++){
    if (j > 0 && str[i] !== pattern[j]) {
      j = table[j-1];
    }
    if (str[i] === pattern[j]) {
      if(j === pLen -1){
        console.log(i-pLen+2,'에서 찾음');
        j = table[j];
      }
      else {
        j++;
      }
    }
  }
}
// ababacabacaabacaaba