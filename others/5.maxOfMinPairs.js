require("colors");

/*
We have an array of length 2 * n (even length) that consists of random integers.
[1, 3, 2, 6, 5, 4]

We are asked to create pairs out of these integers, like such:
[[1, 3], [2, 6], [5, 4]]

How can we divide up the pairs such that the sum of smaller integers in each pair is maximized?

https://algodaily.com/challenges/max-of-min-pairs

*/

const maxOfMinPairs = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b); // if a sort function is ommitted, then the elements are converted to strings and then sorted
  let n = arr.length;
  let sum;
  if (n > 2) {
    sum = sortedArr[n - 2] + sortedArr[n - 4];
  } else {
    sum = sortedArr[n - 2];
  }
  return sum;
};

const arr1 = [3, 4, 2, 5];
const arr2 = [10, 5, 1, 6, 8, 4];

console.log(`Output: ${maxOfMinPairs(arr1)}`.magenta.bold);
console.log(`Output: ${maxOfMinPairs(arr2)}`.magenta.bold);
