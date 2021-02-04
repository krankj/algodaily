require("colors");

/*We're given a number in the form of an integer n.
Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

If it's a multiple of 3, represent it as "fizz".
If it's a multiple of 5, represent it as "buzz".
If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
If it's neither, just return the number itself.*/

function fizzBuzz(input) {
  let str = [];
  for (let n = 1; n <= input; n++) {
    if (n % 5 === 0 || n % 3 === 0) {
      if (n % 3 === 0) {
        str.push("fizz");
      }
      if (n % 5 === 0) {
        str.push("buzz");
      }
    } else {
      str.push(n);
    }
  }
  return str.join("");
}

console.log(`Output: ${fizzBuzz(15)}`.magenta.bold);
