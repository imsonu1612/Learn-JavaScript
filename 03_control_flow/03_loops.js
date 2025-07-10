// what is looping?
// looping is a way to repeat a block of code multiple times 
// for, while, do-while, for-of, for-in loops are some common types of loops in JavaScript
// let's look at an example of a for loop

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

// in the above code, we are looping through the numbers array using a for loop 
// the loop starts from index 0 (i = 0), and continues until the index is less than the length of the array (i < numbers.length)
// in each iteration, the current element of the array is logged to the console using console.log(numbers[i])  
// then the loop increments the index (i++) to move to the next element in the array 
// this process continues until the loop finishes (i = numbers.length) 
// the loop ends and the code outside the loop is executed 
// let's try running this code in a JavaScript environment

for (let i = 0; i <=10; i++){
    const element = i;
    if (element == 5){
        //console.log("The number is 5");
        
    }
    //console.log(element);
}

for (let i = 0; i <= 3; i++){
    // console.log("Outer loop iteration: " + i);
    for (let j = 0; j <=3; j++){
        // console.log("Inner loop iteration: " + j);

    }
}

let myArray = ["apple", "banana", "cherry"];
//  console.log(myArray.length);
for(let i = 0; i < myArray.length; i++){

    const element = myArray[i];
    // console.log(element);
    
}

// Breake and continue statements

for(let i = 0; i < 10; i++){
    if(i === 5){
        // console.log("value 5 is detected");
        
        break;
    }
    // console.log(i);
}


for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log("value 5 is detected");
        
        continue;
    }
    console.log(i);
}

