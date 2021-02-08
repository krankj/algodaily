require("colors");
/*
Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.

We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?*/

//The following solution's time complexity is O(nlog(n))

const isAnagram1 = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let strA = str1.split("").sort().join("");
  let strB = str2.split("").sort().join("");
  return strA === strB;
};

//The following time complexity is O(n+m)
const isAnagram2 = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const strArrA = str1.split("");
  const strArrB = str2.split("");

  const map = new Map();
  for (let ch of strArrA) {
    if (map.has(ch)) map.set(ch, map.get(ch) + 1);
    else map.set(ch, 1);
  }

  let length = strArrA.length;
  for (let ch of strArrB) {
    if (map.has(ch)) {
      if (map.get(ch) !== 0) {
        map.set(ch, map.get(ch) - 1);
        length--;
      }
    }
  }

  return length === 0;
};

console.log(`Is Anagram Sol-1: ${isAnagram1("sudi", "idus")}`.magenta.bold);
console.log(`Is Anagram Sol-2: ${isAnagram2("Mary", "Army")}`.magenta.bold);
