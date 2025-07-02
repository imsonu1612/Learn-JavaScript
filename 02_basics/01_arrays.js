// Arrays ----------------------
// Arrays are a collection of items stored at contiguous memory locations.
// They are used to store multiple values in a single variable.
// Arrays are declared using square brackets [] after the variable name.


const myArray = [1, 2, 3, 4, 5];
const myHeros = ["Shatktiman", "Superman", "Batman", "Ironman", "Spiderman"];

// Accessing elements in an array
// console.log(myArray[0]); // 1
// console.log(myHeros[2]); // Batman
// Modifying elements in an array
myArray[0] = 10;
// console.log(myArray[0]); // 10
// Adding elements to an array
myArray.push(6);
// console.log(myArray); // [10, 2, 3, 4, 5, 6]
// Removing elements from an array
myArray.pop();
// console.log(myArray); // [10, 2, 3, 4, 5

// Array methods
// There are many array methods available in JavaScript, such as push(), pop(), shift(), unshift
// , splice(), slice(), concat(), join(), indexOf(), lastIndexOf(), forEach(), map(), filter(), reduce(), etc.
// Here are some examples of commonly used array methods:
// push() - adds one or more elements to the end of an array
// pop() - removes the last element from an array
// shift() - removes the first element from an array
// unshift() - adds one or more elements to the beginning of an array

// splice() - adds or removes elements from an array
// slice() - returns a subset of elements from an array 
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3); // returns a new array with elements from index 1 to index 2
console.log(myn1); // [2, 3]

console.log("B ", myArray);

const myn2 = myArray.splice(1, 3); // removes elements from index 1 to index 3 and returns them
console.log("C", myArray); // [10, 5, 6]

console.log(myn2); // [2, 3, 4] 



// concat() - combines two or more arrays
// join() - joins all elements of an array into a string
// indexOf() - returns the index of the first occurrence of a specified value in an array
// lastIndexOf() - returns the index of the last occurrence of a specified value in an array
// forEach() - executes a provided function once for each array element

const newArray = myArray.join();

// console.log(myArray); // [10, 2, 3, 4, 5]
// console.log(typeof newArray); // object




