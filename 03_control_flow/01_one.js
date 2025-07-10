// if statement to check if the environment is development or not 

// if (condition){ // condition true in development environment and false in production environment 

//     // Code to be executed in development environment

// }

// All compaireson operators are used for comparison in JavaScript

// == for loose equality (type coercion)
// === for strict equality (no type coercion)
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// Logical operators
// && and
// || or
//! not

// Example of logical operators
// console.log(2 > 1 && 3 > 2); // true
// console.log(2 > 1 || 3 > 2); // true
// console.log(!(2 > 1)); // false

// Example of comparison operators
// console.log(2 == 1); // false (loose equality)
// console.log(2 === 1); // false (strict equality)
// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2!= 1); // true (loose inequality)
// console.log(2!== 1); // true (strict inequality)

// Example of if statement
if (true) {
    // console.log("Condition is true");
} 
else {
    // console.log("Condition is false");
}   

const score = 99;

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// else if (score > 50) {
//     let power = "swim"
//     console.log(`User power: ${power}`);
    
// }

// else if (score > 20) {
//     let power = "walk"
//     console.log(`User power: ${power}`);
// }

const balance = 1000;

// if (balance > 100) console.log("You have a high balance"); // don't do this.

// nested if statement
if (balance > 100) {
    if (score > 80) {
        // console.log("You have a high balance and a good score");
    }
    else {
        // console.log("You have a high balance but a bad score");
    }
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
    console.log("User is logged in and has a debit card");

}





