require("colors");
/*
Check if there occurs a substring in a string
*/
function Node(value) {
  this.value = value;
  this.next = [];
}

class List {
  constructor() {
    this.count = 0;
    this.map = new Map();
    this.tail = new Node();
  }

  add(value) {
    let node;
    if (this.map.has(value)) {
      node = this.map.get(value);
    } else {
      node = new Node(value);
      this.map.set(value, node);
    }
    this.tail.next.push([this.count++, node]);
    console.log("Map is like", this.map);
    this.tail = node;
  }
  getMap() {
    return this.map;
  }
}

function subStringMySoln(str, subStr) {
  let list = new List();
  for (let c of str) {
    list.add(c);
  }

  let map = list.getMap();
  let node;
  let visitedPos;
  for (let i = 0; i < subStr.length; i++) {
    if (i === 0) {
      if (map.has(subStr[0])) {
        node = map.get(subStr[0]);
        visitedPos = 0;
      } else {
        return "Not Found";
      }
    } else {
      let found = false;
      for (let [currentVisitPos, linkNode] of node.next) {
        if (linkNode.value === subStr[i] && currentVisitPos > visitedPos) {
          node = linkNode;
          found = true;
          visitedPos = currentVisitPos;
          break;
        }
      }
      if (!found) {
        return "Not Found";
      }
    }
  }
  return "Found at loc " + (visitedPos - subStr.length + 1);
}

function subStringGFGSoln(str, subStr) {
  let t = 0;
  let i;
  let subStrLength = subStr.length;
  for (i = 0; i < str.length; i++) {
    if (t === subStrLength) {
      break;
    }
    if (str.charAt(i) === subStr.charAt(t)) {
      t++;
    } else {
      t = 0;
    }
  }
  return t < subStr.length ? -1 : i - subStrLength;
}

console.log(`Output: ${subStringMySoln("srinivas", "nin")}`.magenta.bold);
console.time("my");
console.log(`Output: ${subStringMySoln("snardarshan", "dar")}`.magenta.bold);
console.timeEnd("my");

//GFG is 4x faster. Not a very good idea to use my solution then
console.time("gfg");
console.log(`Output: ${subStringGFGSoln("snardashan", "dar")}`.magenta.bold);
console.timeEnd("gfg");
