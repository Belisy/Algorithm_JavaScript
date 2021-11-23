let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

for(i=0; i<n; i++) {
  let a = Number(input[i + 1].split(' ')[0]);
  let b = Number(input[i + 1].split(' ')[1]);
  console.log(a + b);
}