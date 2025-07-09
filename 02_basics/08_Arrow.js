// what is this. keywords?
// this keyword refers to the object that the function is a part of in this case, it refers to the user object

const  user = {
    username: "Sonu Kumar",
    price: 199,

    welcomeMessage: function(){
        console.log(`Welcome to our website, ${this.username}!`);
        console.log(this);
         
    }

}

// user.welcomeMessage(); // Welcome to our website, Sonu Kumar!
// user.username = "sk";
// user.welcomeMessage(); // Welcome to our website, sk!

// console.log(this); // Window {} (global object in browser); empty object in Node.js {} 


// function one(){
//     let username = "sk";
//     console.log(this.username); 
    
// }

// one();


// const two = function(){
//     let username = "Sonukumar";
//     console.log(this.username);

// }


// What is arrow function--------?
// Arrow functions do not bind their own this, they use the this of the enclosing scope.

const two = () =>  { // arrow function does not bind its own this, it uses the this of the enclosing scope.
    let username = "Sonukumar";
    console.log(this);

}
// two();

// const addTwoNumbers = (number1, number2) => {                // arrow function
//    return number1 + number2; 

// }

const addTwoNumbers = (number1, number2) => (number1 + number2); // arrow function
console.log(addTwoNumbers(5, 10)); // 15

