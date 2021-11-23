let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let a = Number(input[0]);

if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
  console.log('1');
} else {
  console.log('0');
}


// 아래코드는 틀린 이유는?

// if (a % 4 === 0) {
//   if (a % 100 !== 0 || a % 400 === 0) {
//     console.log('1');
//   }
// } else {
//   console.log('0');
// }
