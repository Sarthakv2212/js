// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //another way of declaring object
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //adds value at back
// myArr.push(7)
// myArr.pop() //removes value from back

// myArr.unshift(9) //adds value in start (not used much)
// myArr.shift() //removes from front.

// console.log(myArr.includes(9)); //used to check if something is present or not.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //join converts array n string

// console.log(myArr);
// console.log( newArr);


// slice, splice //see notes

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);