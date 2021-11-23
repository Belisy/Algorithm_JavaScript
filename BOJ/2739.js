let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

for(i=1; i<10; i++){
  console.log(`${n} * ${i} = ${n * i}`);
}
