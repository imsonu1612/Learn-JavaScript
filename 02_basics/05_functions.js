function sayMyName(){ // function- Keyword | sayMyName- Function 
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("U");
}
// sayMyName(); //function call;  sayMyName- Reference | ()- execution 


// function addTwoNums(number1, number2) {
//     console.log(number1 + number2);

// }
// addTwoNums(); //NaN


// function addTwoNums(number1, number2) {
//     console.log(number1 + number2);
  
// }
// addTwoNums(3, 4); // 7
//addTwoNums(3, "5"); // 35

// const result = addTwoNums(3, 4);
//     console.log(result);


    function addTwoNums(number1, number2) {
    let result= number1 + number2;
    return result;
  
}
const result = addTwoNums(3, 4);
    //console.log(result);

function loginUserMessage(username = "sk"){
    if(!username){
        console.log("Please Enter the userneme...");
        return;
    
    }

    return `${username} just logged in...!`

}

//console.log(loginUserMessage("Sonu")); // Sonu just logged in...!
console.log(loginUserMessage()); // undefined just logged in...!











 
 