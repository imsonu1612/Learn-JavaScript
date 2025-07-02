const name = "Sonu ";
const repoCount = 22;

// console.log(name + "has " + repoCount + " repositories.");

console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`);

const gameName = new String("BGMIgame");

console.log(gameName[0]); // String object
console.log(gameName.__proto__); // String prototype
console.log(gameName.length); // Length of the string object
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.charAt(2)); // Get character at index 2
console.log(gameName.indexOf("g")); // Find index of 'g'
console.log(gameName.lastIndexOf("g")); // Find last index of 'g'
console.log(gameName.slice(0, 4)); // Slice the string from index 0 to 4
console.log(gameName.replace("game", "gameplay")); // Replace 'game' with 'gameplay'
console.log(gameName.split("g")); // Split the string by 'g'
console.log(gameName.startsWith("B")); // Check if it starts with 'B'
console.log(gameName.endsWith("e")); // Check if it ends with 'e'
console.log(gameName.includes("g")); // Check if it includes 'g'
console.log(gameName.trim()); // Trim whitespace from both ends 
console.log(gameName.trimStart()); // Trim whitespace from the start
console.log(gameName.trimEnd()); // Trim whitespace from the end
console.log(gameName.valueOf()); // Get the primitive value of the string object

const url = "https://www.youtube.com/@sonuyadav";

console.log(url.replace('%20', '-')); // Replace '%40' with '-'

console.log(url.includes('sonuyadav')); // Check if 'sonuyadav' is in the URL


