require("colors");

class HashMap {
  constructor() {
    this.storage = [];
  }

  hashFn(key) {
    let charCode = 0;
    for (let i = 0; i < key.length; i++) {
      charCode += key.charCodeAt(i);
    }
    return charCode;
  }

  get(key) {
    let hash = this.hashFn(key);
    if (!this.storage[hash]) return undefined;
    for (let pair of this.storage[hash]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
  }
  set(key, value) {
    let hash = this.hashFn(key);
    /* We create an empty array if the index corresponding to the hash is empty, 
    so that we can add more elements to the same hash, in case a collision occurs*/
    if (!this.storage[hash]) this.storage[hash] = [];
    this.storage[hash].push([key, value]);
  }
}

let hm = new HashMap();

hm.set("sudi", 1232123);
hm.set("srini", "carOk");

console.log(`Hashmap working: ${hm.get("srini")}`.magenta.bold);
