require("colors");

/*The following is my own solution, where you take the last digit and keep adding to the quotient*/
const sumDigitsUntilOne = (input) => {
  let q, r;
  while (input > 9) {
    q = Math.floor(input / 10);
    r = Math.floor(input % 10);
    input = q + r;
  }
  return input;
};

/*The following was copied out from GFG, it takes slightly longer than above, it terms of execution time and lines of code*/
const sumDigitsUntilOneSlower = (input) => {
  let sum = 0;
  while (input > 0 || sum > 9) {
    if (input === 0) {
      input = sum;
      sum = 0;
    }
    sum += Math.floor(input % 10);
    input = Math.floor(input / 10);
  }
  return sum;
};

/*The number 51984 is divisible by 9 because the sum of its digits 5+1+9+8+4=27 is divisible by 9. 
Since the sum of digits is divisible by 9, the sum of digits until the sum is a single digit is always 9. If not,
the remainder indicates the offset by which the number is short of becoming divisible by 9. In either case, the sum is known*/

const sumDigitsUntilOneFast = (input) => {
  return input % 9 === 0 ? 9 : input % 9;
};

console.log(
  `Sum digits until one digit Sol1: ${sumDigitsUntilOne(66547857787)}`.magenta
    .bold
);
console.log(
  `Sum digits until one digit Sol2: ${sumDigitsUntilOneSlower(66547857787)}`
    .magenta.bold
);
console.log(
  `Sum digits until one digit Sol3: ${sumDigitsUntilOneFast(66547857787)}`
    .magenta.bold
);
