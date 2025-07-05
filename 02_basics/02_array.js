const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "captain america"];
const dc_heroes = ["batman", "superman", "flash",];

marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // ["thor", "ironman", "hulk", "spiderman", "captain america", Array(3)]
// console.log(marvel_heroes[5]); // ["batman", "superman", "flash"]
// console.log(marvel_heroes[5][0]); // "batman"

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); 

const allHeroes = [...marvel_heroes, ...dc_heroes];
//console.log(allHeroes); // ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman", "flash"]

const anotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_anotherArray = anotherArray.flat(Infinity); 

console.log(real_anotherArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Sonu")); // false
console.log(Array.from("Sonu")); // ["S", "o", "n", "u"]   

let score1 = 100;
let score2 = 100;
let score3 = 100;
let score4 = 100;

console.log(Array.of(score1, score2, score3, score4)); // [100, 100, 100, 100]







