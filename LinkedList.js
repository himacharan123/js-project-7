import Node from "./listNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  headNode() {
    return this.head;
  }

  tail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size()) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const value = current.nextNode.value;
    current.nextNode = null;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) return;
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
  }
}
