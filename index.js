import LinkedList from "./LinkedList.js";

const myLinkedList = new LinkedList();

myLinkedList.append(20);
myLinkedList.prepend(10);
myLinkedList.prepend(5);
myLinkedList.insertAt(15, 2);
myLinkedList.pop();
myLinkedList.append(25);
myLinkedList.append(30);
console.log(myLinkedList.contains(15));
console.log(myLinkedList.contains(40));
console.log(myLinkedList.find(25));
console.log(myLinkedList.find(50));
console.log(myLinkedList.headNode().value);
console.log(myLinkedList.tail().value);
console.log(myLinkedList.at(2).value);
console.log(myLinkedList.size());
console.log(myLinkedList.toString());
myLinkedList.removeAt(1);
console.log(myLinkedList.toString());
myLinkedList.append(35);
console.log(myLinkedList.toString());
console.log(myLinkedList.size());
