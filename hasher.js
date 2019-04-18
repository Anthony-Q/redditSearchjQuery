class HashMapper {
  constructor() {
    this.list = [];
  }
  //get from HT
  get(key) {
    let item = this.hasher(key);
    let result = null;
    if (!this.list[item]) {
      return undefined;
    }
    this.list[item].forEach(couple => {
      if (couple[0] === key) {
        result = couple[1];
      }
    });
    return result;
  }
  //delete couple
  delete(key) {
    let item = this.hasher(key);
    let result = null;
    if (!this.list[item]) {
      return undefined;
    }
    this.list[item].forEach(couple => {
      if (couple[0] === key) {
        result = couple[1];
        delete couple[0];
      }
    });
    return result;
  }

  //set from HT
  set(key, value) {
    let item = this.hasher(key);

    if (!this.list[item]) {
      this.list[item] = [];
    }
    this.list[item].push([key, value]);
  }

  //logs the hash list for debugging purposes
  logIt() {
    let printedList = this.list;
    for (var i = 0; i < printedList.length; i++) {
      console.log(printedList[i]);
    }
  }
}

//the actual hashing function
HashMapper.prototype.hasher = string => {
  let hash = 0;
  let char = null;
  for (var i = 0; i < this.length; i++) {
    charr = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
};

let m = new HashMapper();

m.set("anthony", 2002);
m.set("peter", 765);
console.log(m.logIt());
m.delete("anthony");
console.log(m.logIt());
m.set("anthony", 2003);
console.log(m.logIt());
m.set("anthony", 1990);
console.log(m.logIt());
