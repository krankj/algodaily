require("colors");

/*
You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

Each of these strings will be run through a method to operate on the $ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

const input = ["f$st", "st"]
isDollarDeleteEqual(input);
// true
// true because both become "st"
*/

function isDollarDeleteEqual(arr) {
  let prev = "";
  for (let i = 0; i < arr.length; i++) {
    let stripped = getStrippedString(arr[i]);
    if (i !== 0) {
      if (prev !== stripped) {
        return false;
      }
    }
    prev = stripped;
  }
  return true;
}

function replace(str, index) {
  let toReplaceIndex = index - 1;
  return (
    str.substring(0, toReplaceIndex) + "" + str.substring(toReplaceIndex + 2)
  );
}

function getStrippedString(str) {
  let dollarIndex = str.indexOf("$");
  return replace(str, dollarIndex);
}

console.log(
  `Output: ${isDollarDeleteEqual(["f$st", "st", "st", "r$st", "f$st", "a$st"])}`
);
