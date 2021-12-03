const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf-8');

const TransformToArrayOfNumber = (text) => {
  return text.split('\n');
};

const list = TransformToArrayOfNumber(text);
