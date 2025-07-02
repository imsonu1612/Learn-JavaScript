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


