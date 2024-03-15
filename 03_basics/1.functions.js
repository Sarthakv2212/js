

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //in javascript we dont need to define type of parameters.

//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5) //here 3 and 5 are called argument

//const result = addTwoNumbers(3, 5)   //this will store the value in result but when u print it it will show undefined ,so storing function output and printing it is different here. in order to do so we need to return the result inside function as shown below. 
//AI BHAGWN sahi toh hai us funtion me hum print hi toh kara rahe hai toh variable me value store nhi hogi.upar jo likha hai bewakoofi hai lol.

// console.log("Result: ", result);

function addTwoNumbers(number1, number2){ //to return either we can create another variable or directly return the value.

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  

// console.log("Result: ", result);


function loginUserMessage(username ){ //to give a default value we do - function loginUserMessage(username ="sam")
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` //using string interpolation.
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
