// // You have a list of orders,
// // and you want to filter the completed orders
// // and sum their total amounts.

// const orders = [
//   { orderNumber: 1, completed: true, total: 300 },
//   { orderNumber: 2, completed: false, total: 150 },
//   { orderNumber: 3, completed: true, total: 150 },
//   { orderNumber: 4, completed: true, total: 600 },
//   { orderNumber: 5, completed: false, total: 250 },
//   { orderNumber: 6, completed: true, total: 150 },
// ];

// const totalCompletedOrderAmount = orders
//   .filter((order) => order.completed)
//   .map((order) => order.total)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(totalCompletedOrderAmount);

// // Deep clone

// const deepClone = (obj) => {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }

//   // Create a new Array / Object
//   const newObj = Array.isArray(obj) ? [] : {};

//   const keys = Object.keys(obj);

//   keys.map((key) => {
//     const value = obj[key];

//     // Recurssion call
//     newObj[key] = deepClone(value);
//   });

//   return newObj;
// };

// // Test

// let obj1 = {
//   name: "Laptop",
//   price: 600,
//   onSale: true,
//   address: {
//     street: "Trunk road",
//     pincode: 523001,
//     city: "Ongole",
//   },
// };

// let obj2 = deepClone(obj1);

// // let obj2 = obj1;

// // let obj2 = Object.assign(obj1);

// obj2.address.pincode = 523002;

// console.log(obj1);
// console.log(obj2);

// // Deep Freeze

// function deepFreeze(obj) {
//   // Get the property names of the object
//   const propNames = Object.getOwnPropertyNames(obj);

//   // Freeze the object itself
//   Object.freeze(obj);

//   // Recursively freeze all properties of the object
//   for (const propName of propNames) {
//     const prop = obj[propName];

//     if (typeof prop === "object" && prop !== null && !Object.isFrozen(prop)) {
//       deepFreeze(prop); // Recursively freeze nested objects
//     }
//   }

//   return obj;
// }

// // Example usage:
// const myObject = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//     },
//   },
// };

// deepFreeze(myObject);

// // Debouncing in Javascript

// let counter = 0;
// const getData = () => {
//   // calls an API and gets Data
//   console.log("Fetching Data ..", counter++);
// };

// const debounce = function (fn, d) {
//   let timer;

//   return function () {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn();
//     }, d);
//   };
// };

// const betterFunction = debounce(getData, 300);

// // Throttling in Javascript

// // A very expensive function
// const loggerFunc = () => {
//   console.count("Throttled Function");
// };

// const throttle = (fn, limit) => {
//   let flag = true;
//   return function () {
//     if (flag) {
//       fn();
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };

// const betterLoggerFunction = throttle(loggerFunc, 1000);

// // window.addEventListener("resize", loggerFunc);
// window.addEventListener("resize", betterLoggerFunction);

// // Currying in JavaScript

// // sum(p)(q)(r)(s)(t)()

// let sum = (a) => (b) => b ? sum(a + b) : a;

// let sum2 = (a) => {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// };

// console.log(sum(1)(2)(3)(4)(5)());

// // Convert normal function to a curried function

// const curry = (fn) => {
//   return (curried = (...args) => {
//     if (fn.length !== args.length) {
//       return curried.bind(null, ...args);
//     }
//     return fn(...args);
//   });
// };

// // Test
// const total = (x, y, z) => x + y + z;
// const curriedTotal = curry(total);
// console.log(curriedTotal(1)(2)(3));

// // Sample Generator

// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = simpleGenerator();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// function* fibonacciGenerator() {
//   let prev = 0,
//     curr = 1;
//   while (true) {
//     try {
//       yield curr;
//       [prev, curr] = [curr, prev + curr];
//     } catch (err) {}
//   }
// }

// const fib = fibonacciGenerator();
// for (let i = 0; i < 10; i++) {
//   console.log(fib.next().value);
// }

// function* asyncGenerator() {
//   const result1 = yield fetchDataFromAPI("endpoint1");
//   const result2 = yield fetchDataFromAPI("endpoint2");
//   return [result1, result2];
// }

// // Big O()

// // Time Complexity
// // Space Complexity

// // O(1)
// // Static no of executions - fixed times

// const fun = () => {
//   console.log("Hey");
// };

// // O(log(n))
// // searching through a sorted array

// function binarySearch(sortedArray, target) {
//   let left = 0;
//   let right = sortedArray.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (sortedArray[mid] === target) return mid;
//     if (sortedArray[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// }

// // Traversing a balanced search tree

// class TreeNode {
//   // Node definition
// }

// function findLargestNode(node) {
//   while (node.right) {
//     node = node.right;
//   }
//   return node;
// }

// // O(n)
// // Proportional

// const fun2 = (n) => {
//   for (var i = 0; i < n; i++) {
//     console.log("Hey");
//   }
// };

// // O(n2)
// // loop inside a loop

// const fun3 = (n) => {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; i++) {
//       console.log("Hey");
//     }
//   }
// };

// // O(log(n))

// // n=8
// // divide by 2
// // how many iter?

// // log(8) = 3
// // 8 = 2`2

// // O(1)

// // Getting the 1st item from an array
// function getFirstElement(arr) {
//   return arr[0];
// }

// // Accesing any value of a property
// const person = { name: "Alice", age: 30 };
// const name = person.name; // O(1)

// // Adding & Removing item from the end of an Array
// const numbers = [1, 2, 3];
// numbers.push(4); // O(1)
// numbers.pop(); // O(1)

// // O(2`n)

// // Fibonacci Numbers

// // 1, 1, 2, 3, 5, 8, 13

// function fibonacciRecursive(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // Calculate the 7th Fibonacci number
// const result = fibonacciRecursive(7);
// console.log(result); // Output: 13

// // Sets

// const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
// console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }

// // Adding values to a set

// uniqueNumbers.add(6).add(7);

// // Checking the size of the set

// console.log(uniqueNumbers.size); // Output: 7

// // Iteration

// const colors = new Set(['red', 'green', 'blue']);

// // Iterating through set elements using forEach
// colors.forEach(color => {
//   console.log(color);
// });
// // Output:
// // red
// // green
// // blue

// // No Map & Filter methods....
// // Conver it to array using spread operator....

// const mySet = new Set([1, 2, 3, 4, 5]);

// // Also use .from method to convert to array....
// const techSet = new Set(['JavaScript', 'React', 'Node.js']);

// // Converting set to array
// const techArray = Array.from(techSet);
// console.log(techArray); // Output: [ 'JavaScript', 'React', 'Node.js' ]

// // Using map
// const mappedArray = [...mySet].map(value => value * 2);
// console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

// // .has method

// const animals = new Set(['lion', 'tiger', 'bear']);

// // Checking if a value exists in the set
// console.log(animals.has('lion')); // Output: true
// console.log(animals.has('elephant')); // Output: false

// // Removing item
// const fruits = new Set(['apple', 'orange', 'banana']);

// // Deleting a specific element
// fruits.delete('orange');

// // Clearing all elements from the set
// // fruits.clear();
// console.log(fruits); // Output: Set { 'apple', 'banana' }

// // Combining Sets ....
// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([3, 4, 5]);

// // Combining sets
// const unionSet = new Set([...set1, ...set2]);
// console.log(unionSet); // Output: Set { 1, 2, 3, 4, 5 }

// // Checking Sub Sets ....

// const setA = new Set([1, 2, 3, 4, 5]);
// const setB = new Set([2, 4]);

// // Checking if setB is a subset of setA
// const isSubset = [...setB].every(value => setA.has(value));
// console.log(isSubset); // Output: true

// // Finding unique chars of a string ....

// const sentence = 'javascript is awesome';

// // Finding unique characters in a string using Set
// const uniqueChars = new Set(sentence.split(''));
// console.log([...uniqueChars].join('')); // Output: 'javscript isome'

// // Maps

// const myMap = new Map();
// myMap.set("name", "Alice");
// myMap.set("age", 25);
// console.log(myMap.get("name")); // Output: 'Alice'

// // Adding

// const myMap = new Map();

// // Adding key-value pairs
// myMap.set('name', 'John');
// myMap.set('age', 30);

// // Retrieving values
// console.log(myMap.get('name')); // Output: 'John'
// console.log(myMap.get('age')); // Output: 30

// // Iterating

// const myMap = new Map([
//   ['name', 'John'],
//   ['age', 30],
//   ['city', 'New York']
// ]);

// // Iterating over key-value pairs
// for (const [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }
// // Output:
// // name: John
// // age: 30
// // city: New York

// // Checkung existence

// const myMap = new Map([
//   ['name', 'John'],
//   ['age', 30]
// ]);

// // Checking if a key exists
// console.log(myMap.has('name')); // Output: true
// console.log(myMap.has('city')); // Output: false

// // Deleting ....

// const myMap = new Map([
//   ['name', 'John'],
//   ['age', 30]
// ]);

// // Deleting a key-value pair
// myMap.delete('name');
// console.log(myMap.has('name')); // Output: false

// // Clearing all values

// const myMap = new Map([
//   ['name', 'John'],
//   ['age', 30]
// ]);

// // Clearing all key-value pairs
// myMap.clear();
// console.log(myMap.size); // Output: 0

// // Using objects as keys ....

// const objKey1 = { id: 1 };
// const objKey2 = { id: 2 };

// const myMap = new Map();

// // Using objects as keys
// myMap.set(objKey1, 'Value 1');
// myMap.set(objKey2, 'Value 2');

// console.log(myMap.get(objKey1)); // Output: 'Value 1'

// // Converting to an array ....

// const myMap = new Map([
//   ['name', 'John'],
//   ['age', 30]
// ]);

// // Converting map to array of key-value pairs
// const mapArray = Array.from(myMap);
// console.log(mapArray); // Output: [ [ 'name', 'John' ], [ 'age', 30 ] ]

// // Using map for counting occurences ....

// const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];

// // Counting occurrences using Map
// const nameCount = new Map();
// names.forEach(name => {
//   nameCount.set(name, (nameCount.get(name) || 0) + 1);
// });

// console.log(nameCount);
// // Output:
// // Map { 'Alice' => 3, 'Bob' => 2, 'Charlie' => 1 }

// // WeaK Maps

// // WeakMap is a special type of Map in JavaScript that has a few key differences from a regular Map. The primary distinction is that in a WeakMap, keys must be objects, and those objects are weakly referenced, meaning they do not prevent garbage collection. This makes WeakMap particularly useful in scenarios where you want to associate data with objects without preventing those objects from being garbage collected.

// const weakMap = new WeakMap();
// const keyObj = { id: 1 };
// weakMap.set(keyObj, "Some data");
// console.log(weakMap.get(keyObj)); // Output: 'Some data'

// // Creating a WeakMap
// const weakMap = new WeakMap();

// // Creating objects as keys
// const key1 = {};
// const key2 = {};

// // Setting and getting values
// weakMap.set(key1, 'Value associated with key1');
// weakMap.set(key2, 'Value associated with key2');

// console.log(weakMap.get(key1)); // Output: 'Value associated with key1'

// // GC

// let key = {};

// // Creating a WeakMap with a key
// const weakMap = new WeakMap([[key, 'Value associated with key']]);

// // The original key is not referenced elsewhere
// key = null;

// // At this point, the key and the associated value may be garbage collected

// // Private data examples ....

// const privateData = new WeakMap();

// class MyClass {
//   constructor() {
//     // Creating a private data object for each instance
//     privateData.set(this, { privateProp: 'I am private' });
//   }

//   getPrivateProperty() {
//     return privateData.get(this).privateProp;
//   }
// }

// const instance = new MyClass();
// console.log(instance.getPrivateProperty()); // Output: 'I am private'

// // Caching

// const cache = new WeakMap();

// function computeExpensiveOperation(obj) {
//   if (cache.has(obj)) {
//     console.log('Cache hit!');
//     return cache.get(obj);
//   }

//   console.log('Cache miss! Performing expensive operation...');
//   const result = /* perform expensive operation */;
//   cache.set(obj, result);
//   return result;
// }

// // Weak Set

// // WeakSet is another specialized data structure in JavaScript that is similar to WeakMap. Like WeakMap, a WeakSet holds only objects and ensures weak references, meaning it doesn't prevent the objects from being garbage collected. WeakSets are particularly useful when you want to store a collection of unique objects without preventing those objects from being cleaned up by the garbage collector.

// const weakSet = new WeakSet();
// const obj1 = { id: 1 };
// const obj2 = { id: 2 };
// weakSet.add(obj1);
// weakSet.add(obj2);
// console.log(weakSet.has(obj1)); // Output: true

// // GC

// let obj = {};

// // Creating a WeakSet with an object
// const weakSet = new WeakSet([obj]);

// // The original object is not referenced elsewhere
// obj = null;

// // At this point, the object may be garbage collected

// // Storing unique objects ....

// const uniqueObjects = new WeakSet();

// function addUniqueObject(obj) {
//   if (!uniqueObjects.has(obj)) {
//     uniqueObjects.add(obj);
//     console.log('Object added to the set');
//   } else {
//     console.log('Object already exists in the set');
//   }
// }

// const obj1 = {};
// const obj2 = {};

// addUniqueObject(obj1); // Output: Object added to the set
// addUniqueObject(obj1); // Output: Object already exists in the set
// addUniqueObject(obj2); // Output: Object added to the set

// // Caching ....

// const cache = new WeakSet();

// function addToCache(obj) {
//   cache.add(obj);
// }

// function isCached(obj) {
//   return cache.has(obj);
// }

// const obj1 = { id: 1 };
// const obj2 = { id: 2 };

// addToCache(obj1);
// console.log(isCached(obj1)); // Output: true
// console.log(isCached(obj2)); // Output: false

// // public/manifest.json

// // {
// //   "name": "My PWA",
// //   "short_name": "PWA",
// //   "description": "My Progressive Web App",
// //   "start_url": "/",
// //   "display": "standalone",
// //   "background_color": "#ffffff",
// //   "theme_color": "#000000",
// //   "icons": [
// //     {
// //       "src": "icon.png",
// //       "sizes": "192x192",
// //       "type": "image/png"
// //     }
// //   ]
// // }

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let n2 = new Node(2, null);
let n1 = new Node(1, n2);

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  // O(1)
  insertFirstItem(data) {
    this.head = new Node(data, this.head);
  }

  // O(n)
  inserLastItem(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let node = this.head;
    while (node.next) {
      console.log(node.data);
      node = node.next;
    }
    node.next = newNode;
  }

  // O(n)
  printList() {
    let node = this.head;
    if (!node) {
      console.log("List is empty");
    }
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertFirstItem(100);
linkedList.inserLastItem(200);
linkedList.inserLastItem(300);
linkedList.inserLastItem(400);
linkedList.insertFirstItem(10);
console.log("Single Linked Lists");
linkedList.printList();

class NodeD {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  insertFirst(data) {
    const newNode = new NodeD(data, null, this.head);

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  insertLast(data) {
    const newNode = new NodeD(data, this.tail, null);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  printList() {
    let node = this.head;
    if (!node) {
      console.log("List is empty");
    }
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const doubleList = new DoubleLinkedList();

doubleList.insertFirst(1);
doubleList.insertLast(10);
doubleList.insertLast(50);

console.log("Double Linked Lists");
doubleList.printList();
