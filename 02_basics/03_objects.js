// Singleton-----
// A singleton is a design pattern that restricts a class to a single instance and provides a global point of access to it.
// In JavaScript, a singleton can be implemented using an immediately invoked function expression (IIFE
// ) or by using a module pattern.

// Object.create----
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// This allows for inheritance and the creation of objects that share properties and methods with a prototype object



// Objects are a collection of key-value pairs, where keys are strings and values can be any data type.
// Objects can be created using object literals or the Object constructor.
// Example of an object literal-----

const mySym = Symbol("key1");

const JsObject = {
    name: "Sonu",
    "full name": "Sonu Kumar",
    [mySym]: "mykey1",
    age: 22,
    isStudent: true,
    location: "Bihar",
    email: "sonukr@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]

}

// console.log(JsObject.email); // Accessing a property using dot notation
// console.log(JsObject["email"]); // Accessing a property using bracket notation
// console.log(JsObject["full name"]); // Accessing a property with spaces using bracket notation

// console.log(JsObject[mySym]); // Accessing a property using a symbol

JsObject.email = "sonuyadav@gmail.com"; // Updating a property
//Object.freeze(JsObject); // Freezing the object to prevent further modifications

JsObject.email = "sonu@gmail.com"; // This will not change the email property because the object is frozen
console.log(JsObject);


// Functions-----
// Functions are blocks of code that can be executed multiple times from different parts of a program.
// Functions can take arguments and return values.
// Example of a function in an object---

JsObject.greeting = function () {
    console.log("Hello, " + this.name + "!");
}                                               // Adding a new property with a function value
// console.log(JsObject.greeting()); // Calling the function

JsObject.greetingTwo = function() {
    console.log(`Hello, ${this.name}!`);
}
console.log(JsObject.greeting()); // Calling the function
console.log(JsObject.greetingTwo()); // Calling the function













