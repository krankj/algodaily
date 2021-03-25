require("colors");

/*
You're given a string of random alphanumerical characters with a length between 0 and 1000.

Write a method to return the first character in the string that does not repeat itself later on.

https://algodaily.com/challenges/find-first-non-repeating-character
*/

function findFirstNonRepeatingChar(str) {
  let map = new Map();
  let nonRepMap = new Map();

  for (let c of str) {
    if (map.has(c)) {
      nonRepMap.delete(c);
    } else {
      nonRepMap.set(c, 1);
      map.set(c, 1);
    }
  }

  let [firstChar, value] = nonRepMap.entries().next().value;
  return firstChar;
}

console.log(
  `Output: ${findFirstNonRepeatingChar("asdfsdafdasfjdfsafnnunl")}`.magenta.bold
);

//expected to return "j"
