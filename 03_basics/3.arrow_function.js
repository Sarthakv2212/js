//"THIS" refers to currnet context.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this use karna padhta hai nhi toh ye kese batayenge username kiska hai jaise pehele hamne function mai object pass kiya to vaha object.username jaisa kutch likha tha toh yaha toh koi object ka naam hai hi nhi so this se pata chala ki jisme object ka ye function hai usi object ki keys ko access karna hai.
        console.log(this); //this shows the complete object in current context.
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //here it will display a empty object as there is no global object declared in global context but when it is done in console window it shows the "window object" as it is the global object in a web browser.

// function chai(){
    // console.log(this) //this shows many values
//     let username = "hitesh"
//     console.log(this.username); //this statement does not work (gives undefined)so we cannot use this in context of a function but only for an object.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()