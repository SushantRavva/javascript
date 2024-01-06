const accountId = 123
let accountEmail = "sushantravva@gmail.com"
var accountPassword = "1234"
accountcity = "jodhpur" // also avoid declaring the variables like this 
let accountState;

// accountId = 2 // not allowed

accountEmail = "suchir.ravva@gmail.com"
accountPassword = "2345"
accountcity = "mumbai"

/*
Never use var to declare the variable 
due to some scope issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])