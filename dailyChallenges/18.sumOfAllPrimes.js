require("colors");

/*
AlgoDaily Day 18
You're given a number n. Can you write a method sumOfAllPrimes that finds all prime numbers smaller than or equal to n, and returns a sum of them?

For example, we're given the number 15. All prime numbers smaller than 15 are:

Constraints
-n will always be a non zero positive integer <= 100000
-Expected time complexity : O(nlogn)
-Expected space complexity : O(n)

Link: https://algodaily.com/challenges/sum-all-primes
*/

const sumOfAllPrimes = (n) => {
  if (n === 2) return 2;
  let sum = 0;
  for (let j = 2; j < n; j++) {
    let isPrime = true;
    for (let i = 2; i <= j / 2; i++) {
      if (j % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += j;
    }
  }
  return sum;
};

let n = 30;

console.time("brute T");
console.log(`[Sum Of All Primes] Output: ${sumOfAllPrimes(n)}`);
console.timeEnd("brute T");
