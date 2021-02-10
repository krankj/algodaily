require("colors");

/*
In a given array of numbers, one element will show up once and the others will each show up twice. 
Can you find the number that only appears once in O(n) linear time? Bonus points if you can do it in O(1) space as well.*/

//Brute force methos is to put them in a map, and as soon as the count of a number reaches 2, delete it from the map.

//The nicer method with space complexity O(1) is using the XOR operator. n^n is always 0. Hence the loner number will be left out.
const findLoneNumber = (arr) => {
  let loneNumber = 0;
  for (let i of arr) {
    loneNumber ^= i;
  }
  return loneNumber;
};

console.log(
  `The lone number is: ${findLoneNumber([3, 4, 5, 6, 6, 5, 4])}`.magenta.bold
);
