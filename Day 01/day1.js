const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf-8');

const TransformToArrayOfNumber = (text) => {
  const array = text.replace(/\n/g, ',');
  return (finalArray = array.split(',').map((item) => {
    return parseInt(item, 10);
  }));
};

const list = TransformToArrayOfNumber(text);

const CalculateAnswer01 = () => {
  let greaterThanPrevious01 = [];

  for (i = 0; i < list.length; i++) {
    if (list[i] < list[i + 1]) {
      greaterThanPrevious01.push(1);
    }
  }

  return greaterThanPrevious01.length;
};

const CalculateAnswer02 = () => {
  let greaterThanPrevious02 = [];

  for (i = 0; i < list.length; i++) {
    let total1 = list[i] + list[i + 1] + list[i + 2];
    let total2 = list[i + 1] + list[i + 2] + list[i + 3];
    if (total1 < total2) {
      greaterThanPrevious02.push(1);
    }
  }

  return greaterThanPrevious02.length;
};
