// 시간초과

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for(i=1; i<=n; i++){
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  console.log(a + b);
}

// 나동빈강사님 답안
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let answer = '';

// for (let t = 1; t <= testCase; t++) {
//   let data = input[t].split(' ');
//   let a = Number(data[0]);
//   let b = Number(data[1]);
//   answer += a + b + '\n';
// }

// console.log(answer);
