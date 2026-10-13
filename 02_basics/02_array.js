const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros) // isse array k andrrr array bann jaayega ar ye jo array banega usko element ki tarah treat karega

// console.log(marvel_heros);
// console.log(marvel_heros[3marvel_heros.push(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros); //concat naya array return karta h purane mai modify nhi karta

// console.log(allHeros);


//mostly people use stread 
const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);

//we use this method when array is present inside the array 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhishek"))  //we are asking kya ye array h ya nhi
console.log(Array.from("Abhishek"))    //it converts it into array
console.log(Array.from({name:"Abhishek"}))  //intersting case is case mai yue samajh nhi paa rha kiska array banana h keys ka values ka toh ye empty array dega humk

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



//***********array khatam bachha********* */

