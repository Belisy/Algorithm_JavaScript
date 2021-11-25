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

// (a % 4 === 0) 이 조건은 맞으면서 (a % 100 !== 0 || a % 400 === 0)이 조건이 안맞는 경우가
// 빠져있기 때문.
// a변수에 1000, 1900을 넣어보면 오류가 난다. 이런 조건에 대한 값을 정해주지 않았기 때문.
// else {
//   console.log('0');
// }
// 이 코드를 삽입해줘야 한다.

// 즉, 올바른 코드는 아래 코드이다.

// if (a % 4 === 0) {
//   if (a % 100 !== 0 || a % 400 === 0) {
//     console.log('1');
//   } else {
//     console.log('0');
//   }
// } else {
//   console.log('0');
// }