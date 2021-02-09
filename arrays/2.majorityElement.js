require("colors");

/* The following solution has a space complexity of O(1) and time complexity of O(nlogn) 
The following solution cannot indicate if there is no majority element though. This works because the 
majority element can lie either in the first half, the center , or the latter half*/

const majorityElement1 = (arr1) => {
  let sorted = arr1.sort();
  return sorted[Math.floor(sorted.length / 2)];
};

/*The following solution uses a hash map, has a space complexity of O(n) and time complexity of O(n). This solution
can as well find out if there are no majority elements*/

const majorityElement2 = (arr1) => {
  let length = arr1.length;
  const initializedArray = arr1.map((e) => [e, 0]);
  const map = new Map(initializedArray);

  for (let item of arr1) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
      if (map.get(item) > length / 2) {
        return item;
      }
    }
  }
  return "No majority item found";
};

console.log(
  `The majority element is [Sol1]: ${majorityElement1([1, 4, 2, 4, 4, 3, 4])}`
    .magenta.bold
);
console.log(
  `The majority element is [Sol2]: ${majorityElement2([1, 4, 2, 4, 4, 3, 4])}`
    .magenta.bold
);
