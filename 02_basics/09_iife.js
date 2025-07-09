// Immediately Invoked Function Expression (IIFE)---
// This creates a new scope and prevents polluting the global scope.

function chai(){
    console.log("I am an IIFE");
}
//chai(); // Output: I am an IIFE

(function one(){
    console.log("I am an anonymous function"); // Output: I am an anonymous function
}) ();

// arrow function---
( () => {
    console.log("I am an arrow function"); // Output: I am an arrow function
}) ();


( (name) => {
    console.log(`I am an arrow function ${name}`); // Output: I am an arrow function
}) (`sonukumar`)

