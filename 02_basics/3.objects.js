// singleton //itna dyan rakho ki constructor se jab banega toh singla ton banega , lierals se nhi banta.
// Object.create //ye constructor wala method hai constructor manane ke liye.isime singleton banta hai. //pata nhi kya hai mene toh "new" se sikha tha.par vo fumction use karke seekha tha sheryians me.

// object literals

const mySym = Symbol("key1") //declaration of a symbol data type


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //this one cannot be accessed by usual dot method.
    [mySym]: "mykey1", //method to use a symbol type in an object.if we write it normally it will treat it as a string.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //usual dot method to access object values
// console.log(JsUser["email"]) //recommended method to access values,"" are used because actually the keys are strings.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //used to freeze the objecct values so that no changes can be made further in code.
JsUser.email = "hitesh@microsoft.com" //if the object is freezed,this wont give any errors, but no changes will be done in the object.
// console.log(JsUser);

JsUser.greeting = function(){ //function in n object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this can be used to access any other value in object
}

console.log(JsUser.greeting()); //if we just use jsUser.greeting , it returns function anoymous,will be taught afterwards.
console.log(JsUser.greetingTwo());