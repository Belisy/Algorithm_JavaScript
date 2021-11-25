// 틀림

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().split('\n');

let i = 0;
while(i<input.length - 1) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  i += 1;
  console.log(a + b);
}

// 11번 줄과 12번 줄을 바꾸면 인덱스값? 같은 숫자가 아래 추가되서 나오는 이유는?
// i++; 과 i += 1; 의 차이점은?
