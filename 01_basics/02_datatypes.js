"use strict"; // treat all js code as newer version of JS

// alert(3 + 3); // we are using nodejs, not browser, so no alert.

console.log(3 
    +
     3); // code readability is important and should be high, so we can break lines

console.log("Hello, Sonu"); // print a string to the console

/*
Documentation -->

search -
ECMA-262 for latest JS features
https://tc39.es/ecma262/
ECMA-402 for latest Intl features
https://tc39.es/ecma402/

MDN for latest JS features
https://developer.mozilla.org/en-US/docs/Web/JavaScript 


*/

let name = "Sonu"; // string
let age = 30; // number 
let isMarried = false; // boolean
let hobbies = ["reading", "coding", "gaming"]; // array

// number => 2 to power 53
// bigint => 2 to power 64
// bigint is used for large numbers
// string => "Hello", 'Hello', `Hello`
// boolean => true, false
// null => empty value, no value
// undefined => variable is declared but not assigned a value
// symbol => unique value, used for object properties

// object => key-value pairs, used to store complex data
// function => a block of code that can be called later
// class => a blueprint for creating objects, used for OOP
// arrow function => a shorter syntax for writing functions
// template literals => a way to write multi-line strings and embed expressions
// async/await => a way to write asynchronous code in a synchronous style
// let/const => block-scoped variables, used to declare variables
// var => function-scoped variable, used to declare variables (not recommended)

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof hobbies); // object (array is a type of object)

// typeof - returns the type of a variable
// instanceof - checks if an object is an instance of a class or constructor function
// constructor - returns the constructor function of an object
console.log(typeof null); // object (this is a bug in JS, null is not an object)
console.log(typeof undefined); // undefined 
console.log(typeof Symbol("symbol")); // symbol




