// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`dbhjbfjv`)
})(); //semicolon is necessary here. kyuki compiler ko batana hota hai ab khatam.

//IIFE use karte hai kyuki- global scope ke pollution se problem hoti hai kayi bar so global jo global scope ke variables hai ya jo bhi vahan declaration hai usko hatane ke liye.  IMPORTANT

(  () => {
    console.log(`jhghds`)
})();

(  (name) => {
    console.log(`jhghds ${name}`)
})(`sarthak`)