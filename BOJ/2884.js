let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().split('\n');

let H = Number(input[0].split(' ')[0]);
let M = Number(input[0].split(' ')[1]);

if (M >= 45) {
  M -= 45;
} else if (M < 45) {
  H -= 1;
  M += 15;
  if(H == -1) {
    H = 23;
  }
}

console.log(H, M);
