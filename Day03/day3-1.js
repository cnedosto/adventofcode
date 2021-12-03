const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf-8');

const list = text.split('\n').map((line) => line.trim().split(''));
const lines = Array.from({ length: list[0].length }).map(() => 0);

const gamma = [];
const epsilon = [];

for (let i = 0; i < list.length; i++) {
  const bit = list[i];

  for (let j = 0; j < bit.length; j++) {
    lines[j] += bit[j] === '1' ? 1 : 0;
  }
}

for (let k = 0; k < lines.length; k++) {
  gamma.push(lines[k] > list.length / 2 ? '1' : '0');
  epsilon.push(lines[k] < list.length / 2 ? '1' : '0');
}

const gammaToNumber = parseInt(gamma.join(''), 2);
const epsilonToNumber = parseInt(epsilon.join(''), 2);

const energy = gammaToNumber * epsilonToNumber;
