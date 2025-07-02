/* * Comparison Operators
 * 
 * Comparison operators are used to compare two values.
 * They return a boolean value (true or false).
 
console.log(1 == 1); // true
console.log(1 == '1'); // true, because == does type coercion
console.log(2 < 1);
console.log(2 > 1);
console.log(2 <= 2); // true
console.log(2 >= 2); // true
console.log(2 != 1); // true, because != does type coercion
console.log(2 !== '2'); // true, because !== does not do type coercion
console.log(2 === 2); // true, because === does not do type coercion

 */
// console.log("2" > 1);
// console.log("02" > 1); // true, because "02" is coerced to 2

console.log(null > 0); // false, null is coerced to 0
console.log(null >= 0); // true, null is coerced to 0
console.log(null == 0); // false, null is not equal to 0




