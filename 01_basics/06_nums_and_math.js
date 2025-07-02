// ---------Nums-------

const score = 100;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);

// toFixed - formats a number to a fixed number of decimal places

// console.log(balance.toFixed(2)); // "100.00"

const otherBalance = 123.8966;
// console.log(otherBalance.toFixed(2));

// toPrecision - formats a number to a specified precision
// console.log(otherBalance.toPrecision(4)); 

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // "1,000,000"


//+++++++++ Maths Object+++++++++++++++++++++

 console.log(Math);

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
// console.log(Math.abs(-10)); // 10
// console.log(Math.round(3.5)); // 4
// console.log(Math.ceil(3.2)); // 4
// console.log(Math.floor(3.8)); // 3

// console.log(Math.min(1, 2, 3)); // 1
// console.log(Math.max(1, 2, 3)); // 3

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.random() * 10 + 1); // Random number between 1 and 10
console.log((Math.random() * 10) + 1); // Random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

