const colors = require("colors");

function reverseBruteForce(str) {
  let reversed = "";
  for (let i of str) {
    reversed = i + reversed;
  }

  return reversed;
}

console.log(
  `Using Brute force: "${reverseBruteForce("sudarshan")}"`.brightMagenta.bold
);

function reverseSwap(str) {
  let strArr = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    const temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }

  return strArr.join("");
}

console.log(
  `Using 2 pointer swap: "${reverseSwap("sudarshan")}"`.brightMagenta.bold
);
