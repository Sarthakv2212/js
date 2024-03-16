
//scope refers to {}.

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=30
    // console.log("INNER: ", a);
    
}



// console.log(a); //will not come out of if.
// console.log(b); //will not come out of if.
// console.log(c); //will come out of if thats why it is not used.and will rewrite value of c if declared before if.


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //this will work as it can access funtion 1=>chota bade se icecream le sakta hai par bada chote se lega toh acha nhi lagega.
    }
    // console.log(website); //this will not run as website is inside function two.

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username); //error


// ++++++++++++++++++ interesting ++++++++++++++++++// Hoisting


console.log(addone(5)) //this works if written before function.

function addone(num){
    return num + 1
}



addTwo(5) //this does not work if written before.
const addTwo = function(num){ //same as previous function just stored in a variable.
    return num + 2
}