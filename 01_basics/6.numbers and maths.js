const score = 400 //this is automatically treated as no. but we can specically mention it as a number by using oject declaration mentioned below.
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //changes number to string and tells length as well.
// console.log(balance.toFixed(1)); //shows decimals places upto 1 places.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //it will add commas as indian standards.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //it is a object .values can be seen in browser console.
// console.log(Math.abs(-4)); //absolute value i.e. negative to positive
// console.log(Math.round(4.6)); //for round off
// console.log(Math.ceil(4.2)); //round off to above
// console.log(Math.floor(4.9)); //round of to below value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //gives a random value in between 0 and 1.
console.log((Math.random()*10) + 1); //this statement gives random value from 1 to 10 ig.....
console.log(Math.floor(Math.random()*10) + 1); //gives absolute value of random value generated

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //generic statement to get random numbers between 2 given numbers.