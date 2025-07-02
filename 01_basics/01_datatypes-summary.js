// DataTypes Summary -- JavaScript 

// 1. Primitive Data Types
//   - Number: 123, 3.14, -0.5
//   - String: "Hello", 'World', `Template Literal`, call by value.
//   - Boolean: true, false
//   - Null: null
//   - Undefined: undefined
//   - Symbol: Symbol('description')
//   - BigInt: 123n, 9007199254740991n

const score = 100; // Number
const scoreValue = 100.5; // Number with decimal

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userName; // Undefined, not yet assigneda value 

const id = Symbol('123'); // Symbol, unique identifier
const anotherId = Symbol('123'); // Another Symbol, different from the first

console.log(id === anotherId); // false, Symbols are unique

// 2. Reference Data Types  (not primitive)
//    -Object Data Types (not primitive)
//   - Array: [1, 2, 3], ['a', 'b', 'c']

const heros = ["Superman", "Batman", "Wonder", "Flash"]; // Array of strings
console.log(heros[3]); // Accessing first element: Superman

//   - Object: { name: 'John', age: 30 }

let myObject = {
    name: "Sonu",
    age: 30,// Number
}

//   - Function: function() { return 'Hello'; }

const myFunction = function(){
    return 'Hello';
}

//   - Arrow Function: () => 'Hello'
// 4. Other Data Types
//   - Date: new Date(), new Date('2023-01-01')
//   - RegExp: /abc/, new RegExp('abc')
//   - Map: new Map(), new Map([['key', 'value']])
//   - Set: new Set(), new Set([1, 2, 3])
//   - WeakMap: new WeakMap(), new WeakMap([[{}, 'value']])
//   - WeakSet: new WeakSet(), new WeakSet([{}])
// 5. Special Data Types
//   - NaN: Not a Number, used for invalid numeric operations

console.log(typeof score); // "number" to check the datytype of score
console.log(typeof myFunction);

// https://www.w3schools.com/js/js_typeof.asp

// *****************************************************************************************************

// Stack vs Heap Memory -------

// Stack Memory (Non-Primitive): Stores primitive data types (e.g., numbers, strings) and function calls.
//   - Fast access, limited size, LIFO (Last In First Out) structure.
//   - Example: Local variables, function parameters.
//   - Memory is automatically managed, deallocated when the function exits.
//   - Example: `let x = 10;` is stored in stack memory.
//   - Stack memory is used for static memory allocation.
//   - Example: `function add(a, b) { return a + b; }` stores `a` and `b` in stack memory.
//   - Stack memory is used for function calls and local variables.

let myYoutubeChannel = "Sonu Yadav"; // String stored in stack memory

let anothername = "Sonu Yadav"; // Another string stored in stack memory
anothername = "Sk Yadav"; // Reassigning a new value, old value is still in stack memory

console.log(myYoutubeChannel); // Accessing the string stored in stack memory
console.log(anothername); // Accessing the reassigned string in stack memory

// Heap Memory (Reference Types): Stores non-primitive data types (e.g., objects, arrays).
//   - Dynamic memory allocation, larger size, slower access.
//   - Example: Objects, arrays, functions.
//   - Memory is managed by the garbage collector, deallocated when no references remain.
//   - Heap memory is used for dynamic memory allocation.

let userOne ={
    email: "user@goole.com",
    upi: "user@upi"
}

let userTwo = userOne; // Reference to the same object in heap memory

userTwo.email = "sonuyadav930822@gmail.com"; // Modifying the object through userTwo

console.log(userOne.email); // Accessing the modified email through userOne
console.log(userTwo.email); // Accessing the modified email through userTwo







