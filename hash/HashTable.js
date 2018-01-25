/**
 * HashTable(不解决冲突)
 *
 * @class HashTable
 */
class HashTable {
  constructor() {
    this.table = [];
  }

  // 散列函数
  static hashCode(key) {
    let hash = 0;
    for (let codePoint of key) {
      hash += codePoint.charCodeAt();
    }
    return hash % 37;
  }

  // 修改和增加元素
  put(key, value) {
    const pos = HashTable.hashCode(key);
    this.table[pos] = value;
  }

  get(key) {
    return this.table[HashTable.hashCode(key)];
  }

  remove(key) {
    this.table[HashTable.hashCode(key)] = undefined;
  }
}
/**
 * 线性探查法解决冲突
 *
 * @class HashTableOA
 * @extends {HashTable}
 */
class HashTableOA extends HashTable {
  constructor() {
    super();
  }

  // 修改和增加元素
  put(key, value) {
    let pos = HashTable.hashCode(key);
    while (
      this.table[pos] !== undefined &&
      !Object.is(this.table[pos].key, key)
    ) {
      pos++;
    }
    this.table[pos] = { key, value };
  }

  get(key) {
    let pos = HashTable.hashCode(key);
    while (true) {
      let obj = this.table[pos];
      if (obj === undefined) {
        return undefined;
      }
      if (Object.is(obj.key, key)) {
        return obj.value;
      } else {
        pos++;
      }
    }
  }

  remove(key) {
    let pos = HashTable.hashCode(key);
    while (true) {
      let obj = this.table[pos];
      if (obj === undefined) {
        return false;
      }
      if (Object.is(obj.key, key)) {
        obj = undefined;
        return true;
      } else {
        pos++;
      }
    }
  }
}

const hash = new HashTableOA();
hash.put('Surmon', 'surmon.me@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow®email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaronOemail.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana©email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sueOemail.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul©email.com');
hash.put('Nathan', 'nathan@email.com');

// 测试get方法
console.log(hash.get('Surmon')); // surmon.me@email.com
console.log(hash.get('Loiane')); // undefined
console.log(hash);
