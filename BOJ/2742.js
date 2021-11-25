let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for (i=0; i<n; i++) {
  answer += n - i + '\n';
}
console.log(answer);

// for (i=n; i>=1; i--) {
//  console.log(i);
// }

// for (let i = n; i >= 1; i--) {
//   answer += i + '\n';
// }