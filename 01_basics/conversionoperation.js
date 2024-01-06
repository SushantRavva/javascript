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



// Operations

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"4"); //34
console.log("1"+2+"3"); //123
console.log(1+"2"+3); //123


// postfix increment

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 3n+1; y2 is 3n


// prefix increment

let x1 = 3;
const y1 = ++x1;
// x1 is 4; y1 is 4

let x3 = 3n;
const y3 = ++x3;
// x3 is 3n+1; y3 is 3n+1
