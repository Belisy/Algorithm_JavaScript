let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let x = Number(input[0].split(' ')[1]);
let a = input[1].split(' ').map(num => Number(num));

let answer = '';
for (i=0; i<n; i++) {
  if(a[i]<x) {
    answer += a[i] + ' ';
  }
}
console.log(answer);

// let answer = a.filter(el => el<x).join(' ');
// console.log(answer);
