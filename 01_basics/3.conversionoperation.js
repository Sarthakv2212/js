let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) //to convert string to a number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN. //when we use 3abc as string and convert it to a number it gets converted but in out shows nan(not a number) (problem in js).
//but type of NaN is number
//  true => 1; false => 0 //conversion of boolean to number. here wise versa is also true...shown below.

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false. empty string when converted gives false on conversion.
// "hitesh" => true . string when converted gives true on conversion.

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/3);
// console.log(2%3); //remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 //iss tarah se string bhi jodi ja sakti hain.
// console.log(str3);


// COMPLEX SITUATUIONS

// console.log("1" + 2);           =12
// console.log(1 + "2");           =12
// console.log("1" + 2 + 2);       =122
// console.log(1 + 2 + "2");       =32.   //cleared in documentation but in short agar string first toh sab string , par agar number hain starting me toh 
                                           //sum ho jayenge phir string add hogi uske baad.

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);    =1  //no need to do such things just GK.   +ka koi farak nhi padhta.
// console.log(+"");      =0  //no need to do such things just GK.



let gameCounter = 100
++gameCounter;   //prefix and postfix i know that.
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
