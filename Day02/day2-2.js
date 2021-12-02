const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf-8');

const TransformToArrayOfNumber = (text) => {
  const array = text.replace(/\n/g, ',');
  return array.split(',');
};

const list = TransformToArrayOfNumber(text);
let horizontal = 0;
let depth = 0;
let aim = 0;

list.forEach((entry) => {
  const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(entry);
  switch (groups.direction) {
    case 'forward':
      horizontal += parseInt(groups.num, 10);
      depth = depth + aim * parseInt(groups.num, 10);
      break;
    case 'down':
      aim += parseInt(groups.num, 10);
      break;
    case 'up':
      aim -= parseInt(groups.num, 10);
      break;
    default:
      break;
  }
});

console.log(horizontal * depth);
