require("colors");

const powerOf3 = (n) => {
  if (n === 1) {
    return true;
  } else if (n <= 0) {
    return false;
  } else {
    return powerOf3(n / 3);
  }
};

console.time("powerof3");
console.log(`Is power of 3? : ${powerOf3(3486784401)}`.magenta.bold);
console.timeEnd("powerof3");
