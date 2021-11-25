let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for (i=1; i<=n; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  answer += `Case #${i}: ${a + b} \n`
}
console.log(answer);