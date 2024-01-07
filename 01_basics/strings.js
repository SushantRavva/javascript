const name1 = "sushant"
const repocount = 50

console.log(`Hello my name is ${name1} and my repo count is ${repocount}`);

// for accessing all the methods 
// of the string we can declare the string 
// in a different way

const gamnename = new String('Sush')

console.log(gamnename[0]);
console.log(gamnename.__proto__);

console.log(gamnename.length);
console.log(gamnename.toUpperCase());

console.log(gamnename.charAt(2));
// console.log(gamnename.indexOf('t'));

// string slicing and substrings

const str = "sushant-ravva"
const newstr = str.substring(0, 4)
const slicedstr = str.slice(0, -4)
const slicedstr1 = str.slice(-5)
console.log(newstr)
console.log(slicedstr)
console.log(slicedstr1)

// example 1
// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
  const newCar = myCar.slice(0, 2);
  
  console.log("myCar =", myCar);
  console.log("newCar =", newCar);
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  
  // Change the color of myHonda.
  myHonda.color = "purple";
  console.log("The new color of my Honda is", myHonda.color);
  
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);


  // exampl 2

  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 33, // ignored by slice() since length is 3
  };
  console.log(Array.prototype.slice.call(arrayLike, 1, 3));
  // [ 3, 4 ]

  const newstring = "   ssusha   " 
  console.log(newstring);
  console.log(newstring.trim());
  console.log(newstring.trimEnd());
  console.log(newstring.trimStart());

  // replace and split function

  const url = "https://fictional-meme-9r4r4rvg4r43797r.github.dev/"
  console.log(url.replace('meme', 'hello'));
  console.log(url.includes('meme'))

  console.log(str.split('-'));