require("colors");

/*
While going to solve the substring problem, ended up doing this :D
Well this method is useful if you wanna check if there is a word/path is reachable. Something like this: 
"abracadarbaaaa", "bar"

"bar" can be formed from the above since "ba", and then from "a" you can go to "r"
Can be used for something like connecting flights
*/
function Node(value) {
  this.value = value;
  this.next = [];
  this.reverse = true;
}

class List {
  constructor() {
    this.counter = 0;
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
    this.tail.next.push(node);
    this.tail = node;
  }
  getMap() {
    return this.map;
  }
}

const subString = (str, subStr) => {
  let list = new List();
  for (let c of str) {
    list.add(c);
  }

  let map = list.getMap();
  let node;
  for (let i = 0; i < subStr.length; i++) {
    if (i === 0) {
      if (map.has(subStr[0])) {
        node = map.get(subStr[0]);
      } else {
        return "Not Found";
      }
    } else {
      let found = false;
      for (let linkNode of node.next) {
        if (linkNode.value === subStr[i]) {
          node = linkNode;
          found = true;
          break;
        }
      }
      if (!found) {
        return "Not Found";
      }
    }
  }
  return "Found";
};

console.log("Output: ", subString("abracadarbaaaa", "cr"));
console.log("Output: ", subString("arrarr", "arr"));
