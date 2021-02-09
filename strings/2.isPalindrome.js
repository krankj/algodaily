require("colors");

const isPalindrome = (str1) => {
  let strArr = str1.split("");
  let start = 0;
  let end = strArr.length - 1;

  while (start < end) {
    if (strArr[start] !== strArr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const isPalindromeBrute = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(`Is Palindrome: ${isPalindrome("racecar")}`.magenta.bold);
console.log(`Is Palindrome: ${isPalindromeBrute("racecar")}`.magenta.bold);
