// what is switch statement?
// switch statement is used to compare a value and execute a block of code based on that value
// It is more efficient than multiple if-else statements
// Syntax:
switch (expression) {
    case value1:
        // block of code to be executed if expression is equal to value1
        break;
    case value2:
        // block of code to be executed if expression is equal to value2
        break;
    default:
        // block of code to be executed if expression is not matched with any case
        break;

        // Note:---

        // multiple case statements can be added here
        // default case is optional
        // if no case matches, the default block will be executed
        // break statement is used to exit the switch statement
        // if break statement is not used, the next case will be executed
        // if no break statement is used, the next case will be executed until a break statement is encountered
        // switch statement can have multiple default cases as well 
        // if a case matches, the corresponding block of code will be executed and the switch statement will be exited
        // if no case matches and no break statement is used, the program will continue executing the next statement
        // if no case matches and all break statements are used, the program will stop executing
        // if no case matches and no break statement is used and the switch statement is inside a loop, the loop will continue executing


}

// falsy values in JavaScript:----

// false, 0, "", null, undefined, NaN, and false are considered falsy values in JavaScript
// all other values are considered truthy values in JavaScript

// truthy values in JavaScript:----
// all other values are considered truthy values in JavaScript
// true, any non-zero number, any non-empty string, any non-null object, and any non-false boolean value are considered truthy values in JavaScript

// Note:---

// NaN (Not a Number) is a special value in JavaScript that represents an undefined or unrepresentable number value 
// it is not considered a truthy value in JavaScript 


