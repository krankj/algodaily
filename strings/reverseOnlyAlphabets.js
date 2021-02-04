require("colors");

/*
You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). 
For example, one input may be:
'sea!$hells3'

Can you reverse only the alphabetical ones?
*/

const isLetter = (c) => c.toUpperCase() !== c.toLowerCase();

const reverseOnlyAlphabets = (str) => {
  const strArray = str.split("");
  let start = 0;
  let end = strArray.length - 1;

  while (start <= end) {
    if (!isLetter(strArray[start])) {
      start++;
      continue;
    }
    if (!isLetter(strArray[end])) {
      end--;
      continue;
    }
    const temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    start++;
    end--;
  }

  return strArray.join("");
};

console.log(
  `Reversed alphabets are: ${reverseOnlyAlphabets("sea!$hells3")}`.magenta.bold
);
