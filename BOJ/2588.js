let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let b0 = Number(input[1][0]);
let b1 = Number(input[1][1]);
let b2 = Number(input[1][2]);

console.log(a * b2);
console.log(a * b1);
console.log(a * b0);
console.log(a * b);
