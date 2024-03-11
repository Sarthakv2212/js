const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");     //for concatenation ....not recommended to do like tthat.


//modern way for strings (preferred) called as string interpolation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //back tiks are used``

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());      in prototype.
console.log(gameName.charAt(2));   //to know a character at certain position
console.log(gameName.indexOf('t'));    // to know index od a character.

const newString = gameName.substring(0, 4) //last value is not included.can be seen in output.
console.log(newString);

const anotherString = gameName.slice(0, 4) //similar to substring,google the difference.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());   //removes unwwanted spaces of start and end.

const url = "https://hitesh.com/hitesh%20choudhary" //the browser turns spaces into %20.

console.log(url.replace('%20', '-')) //to replace stuff

console.log(url.includes('sundar')) //pata krne ke liye ki hai ki naahi.

console.log(gameName.split('-')); //splits a string into array on the basis of - as seperators(i.e. mentioned in the brackets)