const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //this does not merge both the arrays, instead putts the second array as the 4th elemnt of 1st array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //to access the array inside array

// const allHeros = marvel_heros.concat(dc_heros) // concat requires a new array where the new merged array needsd to be saved
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //instead of concat, the spread operator is used.all elements in array will be individual here.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //makes all elements individual.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //checks if array
console.log(Array.from("Hitesh")) //converts to array
console.log(Array.from({name: "hitesh"})) // interesting //gives an empty array cause it is unable to convert.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // to form an array from set of elements.