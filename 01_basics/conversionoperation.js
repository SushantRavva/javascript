let score = "33abc"
let score1 = null
let score2 = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number (score2)


console.log(typeof valueInNumber); // the string type gets converted to number type
console.log(valueInNumber); // this gives NaN, but how can NaN be a number?!


console.log(typeof valueInNumber1); // this is number 
console.log(valueInNumber1); // this gives 0

console.log(typeof valueInNumber2); // this gives number
console.log(valueInNumber2); // this gives NaN

// what about the boolean types

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true: 0 => false
// "" => false
// "sushant" => true