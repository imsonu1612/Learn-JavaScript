// Scope- 
//Scope in JavaScript refers to the current context of code, which determines the accessibility of  variables to JavaScript. 
// The two types of scope are local and global: 
// Global variables are those declared outside of a block. 
// Local variables are those declared inside of a block.


// var c = 200
let a = 300
if (true){
    let a = 10;
    const b = 20;

    // console.log("Inner: ", a); // 10
       
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sonu"

    // nested functio- function two accessing outer scope variable - username
    function two(){
        const website = "youtube"
        console.log(username); // sonu

    }
    // console.log(website);
    two();


}

//one();

if (true){
    const username = "sk"
    if(username === "sk"){
        const website = " google"
        // console.log(username + website); // skgoogle
    }
    // console.log(website); // ReferenceError: website is not defined in this scope 

    
}

//console.log(username); // ReferenceError: username is not defined in this scope 

// Function- hoisting - JavaScript allows function declarations to be hoisted. 


// ******************************************************************

console.log(addone(10)); // 11

function addone(num){    
    return num + 1;
}

console.log(addtwo(10)); // NaN); // NaN because addtwo is not defined in this scope or ReferenceError: Cannot access 'addtwo' before initialization

const addtwo = function(num){ // arrow function - hoisting not applicable here 
    return num + 2;
}

