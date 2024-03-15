// const tinderUser = new Object() //ye bhi objecct banane ka tareeka hai,isse jo banega vo singleton hoga.
const tinderUser = {}
 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { //new object
    email: "some@gmail.com",
    fullname: { //object nesting
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //nested object vale access method.

//now trying to combine objects.
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //this has same problem,instead of combining,it will make 2 objects in one object.
// const obj3 = Object.assign({}, obj1, obj2, obj4) //syntax 1 to combine //the curly braces are optional.

const obj3 = {...obj1, ...obj2} //syntax 2 to combine same as array .
// console.log(obj3);


const users = [ //array ke andar bohot saare objects.
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //method to access value in a object inside a array.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //gives all the keys of the object in the form of an array.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//gives keys and values as a pair in multiple arrays.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to know if the property exists.

//object Destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //normal method

const {courseInstructor: instructor} = course  //destructuring to make code cleaner,here instructor is a short name given to courseinstructor this is optional.there for to destructure a object curly braces are used.

// console.log(courseInstructor);
console.log(instructor);


//json(object without name.)(api)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//sometime we get api in form of array of objects.
[
    {},
    {},
    {}
]

//json formater is used to better understand an api fetched data.