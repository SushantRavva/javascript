console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* the reason is that the equality check
 and the comparison operators work differently.
 The comparision operators convert the strings to
 the numbers for comparision trating null as 0
 */

 // === is known as strict check. which checks
 // both the values and the datatypes

 console.log("2" == 2); // true
 console.log("2" === 2); // false