let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

for (i=1; i<=n; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}