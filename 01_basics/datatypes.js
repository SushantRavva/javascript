"use strict" // treat all JS code as newer version

// alert(3+4) // this will not work as we are using nodeJS not browser

// number  => 2 raised to 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

// console.log(typeof undefined) // undefined
// console.log(typeof null) // object


// Primitive datatypes

/*
7 types
String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100 // typeof -> number
const scoreValue = 100.3 // typeof -> number

const isLoggedIn = false // typeof -> boolean
const outsideTemp = null // typeof -> object
let userEmail;

const id = Symbol('123') // typeof -> symbol
const anotherId = Symbol('123') // typeof -> symbol

// console.log(id === anotherId); // typeof -> false
const bigNumber = 230813209240247n // typeof -> bigint


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // object

let myObj = { // object
    name: "sushant",
    age: 22,
}

const myFunction = function(){ // typeof -> function
    console.log("Hello world")
}

console.log(typeof myFunction);

// stack (primitive), Heap (non primitive)

let channel = "sushantdotcom"
let anothername = channel
anothername = "suchirdotcom"

console.log(channel);
console.log(anothername);

let userOne = {
    email: "sushantdotravva@gmail",
    upi: "user@sbi"
}

let usertwo = userOne
usertwo.email = "suchirdotravva@gmail"

console.log(userOne.email);
console.log(usertwo.email);