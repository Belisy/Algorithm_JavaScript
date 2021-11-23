let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');

// 1. if문
// let a = Number(input[0]);

// if (a >= 90) {
//   console.log('A');
// } else if (a >= 80) {
//   console.log('B');
// } else if (a >= 70) {
//   console.log('C');
// } else if (a >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }


// 2. switch문
let a = Math.floor(Number(input[0]) / 10);

switch (a) {
  case 10:
  case 9:
  console.log('A');
  break;
  case 8:
  console.log('B');
  break;
  case 7:
  console.log('C');
  break;
  case 6:
  console.log('D');
  break;
  default:
  console.log('F');
}