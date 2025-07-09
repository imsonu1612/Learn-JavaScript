function calculateCartPrice(val1, val2, ...num1){ // rest operator- (...) to print all value in an arrays. |

    return num1;
}

// console.log(calculateCartPrice(22)); //22
// console.log(calculateCartPrice(222, 333, 444)); // [222, 333, 444] when using rest operator (...)

// console.log(calculateCartPrice(22, 33, 44, 55, 66)); // [ 44, 55, 66 ] | val1=22, val2=33

const user = {
    username: "Sonu Kumar",
    price: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user); // Username is Sonu Kumar and price is 199

handleObject({
    username: "Sk",
    prince: 22
}) // Username is Sk and price is undefined


const myNewArray = [200, 400, 500,600, 700];
function returnSecondValue(getArray){
    return getArray[1];

}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 900, 500,600, 700])); // 900








