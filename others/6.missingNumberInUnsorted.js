require("colors");

//lowerBound is 11
//upperBound is 19
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

function missinNumberMathSoln(arr, lB, uB) {
  let sum = 0;
  let range = uB - lB + 1;
  let diff = lB * uB + (range * (range + 1)) / 2;
  console.log("Difference is", diff);
  // sum of fist n numbers are n(n+1) / 2
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return diff - sum;
}

const arr1 = [2, 5, 1, 4, 9, 6, 3, 7];
//console.log(`Output: ${missingNumberArrSoln(arr1, 11, 19)}`);
console.log(`Output: ${missinNumberMathSoln(arr1, 1, 9)}`);
