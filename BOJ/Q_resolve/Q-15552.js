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
// console.log를 바로 안에 적으면, 계속 콘솔을 왔다갔다 하면서 시간이 많이 걸리기 때문에
// answer변수를 만들어서 반복문으로 넣어주고, 나중에 한번에 answer를 출력해서 시간을 절약한다.
// }

// console.log(answer);
