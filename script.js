// You have a list of orders,
// and you want to filter the completed orders
// and sum their total amounts.

const orders = [
  { orderNumber: 1, completed: true, total: 300 },
  { orderNumber: 2, completed: false, total: 150 },
  { orderNumber: 3, completed: true, total: 150 },
  { orderNumber: 4, completed: true, total: 600 },
  { orderNumber: 5, completed: false, total: 250 },
  { orderNumber: 6, completed: true, total: 150 },
];

const totalCompletedOrderAmount = orders
  .filter((order) => order.completed)
  .map((order) => order.total)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalCompletedOrderAmount);

// Deep clone

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Create a new Array / Object
  const newObj = Array.isArray(obj) ? [] : {};

  const keys = Object.keys(obj);

  keys.map((key) => {
    const value = obj[key];

    // Recurssion call
    newObj[key] = deepClone(value);
  });

  return newObj;
};

// Test

let obj1 = {
  name: "Laptop",
  price: 600,
  onSale: true,
  address: {
    street: "Trunk road",
    pincode: 523001,
    city: "Ongole",
  },
};

let obj2 = deepClone(obj1);

// let obj2 = obj1;

// let obj2 = Object.assign(obj1);

obj2.address.pincode = 523002;

console.log(obj1);
console.log(obj2);

// Deep Freeze

function deepFreeze(obj) {
  // Get the property names of the object
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze the object itself
  Object.freeze(obj);

  // Recursively freeze all properties of the object
  for (const propName of propNames) {
    const prop = obj[propName];

    if (typeof prop === "object" && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop); // Recursively freeze nested objects
    }
  }

  return obj;
}

// Example usage:
const myObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

deepFreeze(myObject);

// Debouncing in Javascript

let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
};

const debounce = function (fn, d) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const betterFunction = debounce(getData, 300);

// Throttling in Javascript

// A very expensive function
const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterLoggerFunction = throttle(loggerFunc, 1000);

// window.addEventListener("resize", loggerFunc);
window.addEventListener("resize", betterLoggerFunction);

// Currying in JavaScript

// sum(p)(q)(r)(s)(t)()

let sum = (a) => (b) => b ? sum(a + b) : a;

let sum2 = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};

console.log(sum(1)(2)(3)(4)(5)());

// Convert normal function to a curried function

const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

// Test
const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(1)(2)(3));

// Sample Generator

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = simpleGenerator();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* fibonacciGenerator() {
  let prev = 0,
    curr = 1;
  while (true) {
    try {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    } catch (err) {}
  }
}

const fib = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

function* asyncGenerator() {
  const result1 = yield fetchDataFromAPI("endpoint1");
  const result2 = yield fetchDataFromAPI("endpoint2");
  return [result1, result2];
}

// Big O()

// Time Complexity
// Space Complexity

// O(1)
// Static no of executions - fixed times

const fun = () => {
  console.log("Hey");
};

// O(n)
// Proportional

const fun2 = (n) => {
  for (var i = 0; i < n; i++) {
    console.log("Hey");
  }
};

// O(n2)
// loop inside a loop

const fun3 = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; i++) {
      console.log("Hey");
    }
  }
};

// O(log(n))

// n=8
// divide by 2
// how many iter?

// log(8) = 3
// 8 = 2`2

// O(1)

// Getting the 1st item from an array
function getFirstElement(arr) {
  return arr[0];
}

// Accesing any value of a property
const person = { name: "Alice", age: 30 };
const name = person.name; // O(1)

// Adding & Removing item from the end of an Array
const numbers = [1, 2, 3];
numbers.push(4); // O(1)
numbers.pop(); // O(1)

// O(log(n))
// searching through a sorted array

function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Traversing a balanced search tree

class TreeNode {
  // Node definition
}

function findLargestNode(node) {
  while (node.right) {
    node = node.right;
  }
  return node;
}

// 1, 1, 2, 3, 5, 8, 13

function fibonacciRecursive(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Calculate the 7th Fibonacci number
const result = fibonacciRecursive(7);
console.log(result); // Output: 13
