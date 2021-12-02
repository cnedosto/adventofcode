const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf-8');

const TransformToArrayOfNumber = (text) => {
  const array = text.replace(/\n/g, ',');
  return array.split(',');
};

const list = TransformToArrayOfNumber(text);

let forward = 0;
let depth = 0;

list.forEach((entry) => {
  const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(entry);
  switch (groups.direction) {
    case 'forward':
      forward += parseInt(groups.num, 10);
      break;
    case 'down':
      depth += parseInt(groups.num, 10);
      break;
    case 'up':
      depth -= parseInt(groups.num, 10);
      break;
    default:
      break;
  }
});

console.log(depth);
