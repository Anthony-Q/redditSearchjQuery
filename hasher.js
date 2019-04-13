class HashMapper {
  constructor() {
    this.list = [];
  }
  //get from HT
  get(key) {
    let item = this.hasher(key);
    let result = null;
    if (!this.list) {
      return undefined;
    }
    this.list[item].forEach(couple => {
      if (couple[0] === key) {
        result = couple[1];
      }
    });
    return result;
  }

  //set from HT
  set(key, value) {
    let item = this.hasher(key);
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
