const accountId = 144455
let accountEmail = "sonukr@gmail.com"
var accountPassword = "Sonu@1234"
accountCity = "Delhi"

let accountState

// accountId = 2 // not allowed, const cannot be reassigned
accountEmail = "sonuyadav@gmail.com" // allowed, const can be reassigned
accountPassword = "sonu12345" // allowed, var can be reassigned
accountCity = "Goa" // allowed, var can be reassigned

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because it has function scope and can lead to unexpected behavior.
because of issues in block scope and function scope.
Use let for variables that may change and const for constants.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

