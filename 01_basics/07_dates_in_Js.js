// Date-------------------------------------
// Date in JavaScript is a built-in object that represents dates and times.
// It provides methods for manipulating dates, such as getting the current date, formatting dates, and
// performing date calculations.
// Creating a Date Object

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString()); // Current date in a human-readable format
// console.log(myDate.toISOString()); // Current date in ISO format

//let myCreatedDate = new Date('2023-10-01');
let myCreatedDate = new Date("2003-12-16");

//console.log(myCreatedDate.toLocaleString()); // "Sun Oct 01 2023 

let myTimestamp = Date.now();// console.log(myTimestamp); // Current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp); // Current timestamp in milliseconds since January 1, 1970
// console.log(new Date(myTimestamp)); // Convert timestamp back to date
