require("colors");

function missingNumberArrSoln(arr, lowerBound, upperBound) {
  // its consecutive, you know the length. You know one is missing. You just need to find which one it is

  let copyArr = [...Array(upperBound - lowerBound + 1).keys()].map(
    (i) => i + lowerBound
  );

  for (let i = 0; i < upperBound - lowerBound; i++) {
    copyArr[arr[i] - lowerBound] = -1;
  }
  for (let i = 0; i <= upperBound - lowerBound; i++) {
    if (copyArr[i] != -1) {
      return copyArr[i];
    }
  }
}

function missingNumberMathSoln(arr, lb, ub) {
  // sum of n consecutive numbers starting from n is n(n+1)/2. Sum of n numbers starting from i and ending at j is n(i+j)/2, where n is (j-i+1)
  let sum = 0;
  let n = ub - lb + 1;
  let diff = ((lb + ub) * n) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return diff - sum;
}

const arr1 = [12, 15, 11, 14, 19, 16, 13, 17];

console.time("brute");
console.log(`Output: ${missingNumberArrSoln(arr1, 11, 19)}`);
console.timeEnd("brute");

console.time("math");
console.log(`Output: ${missingNumberMathSoln(arr1, 11, 19)}`);
console.timeEnd("math");
