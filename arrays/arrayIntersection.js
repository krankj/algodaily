require("colors");

/* The following function finds the intersection of 2 arrays without any duplicates ( hence we use sets here )*/

function intersection(arr1, arr2) {
  const setA = new Set(arr1);
  const intersectedSet = new Set(arr2.filter((ele) => setA.has(ele)));
  return [...intersectedSet];
}

console.log(
  `Intersections of 2 sets, without duplicates are: ${intersection(
    [2, 2, 3, 4],
    [3, 3, 4, 5]
  )} `.magenta.bold
);
