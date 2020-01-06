/**
 * fn:
 * push
 * pop
 * peek
 * isEmpty
 * clear
 * size
 */

// Array
class Stack {
  constructor() {
    this.item = [];
  }
  push(val) {
    this.item.push(val);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  clear() {
    this.item = [];
  }
  size() {
    return this.item.length;
  }
}

let test1 = new Stack();
// console.log(test1.isEmpty());
// test1.push(1);
// test1.push(3);
// test1.push(2);
// console.log(test1.peek());
