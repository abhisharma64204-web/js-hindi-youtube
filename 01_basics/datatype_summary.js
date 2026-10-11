// primitive


// 7 types: stering,number,boolean,null,undefined,symbol,bigint
const score=100
const scoreValue=100.3

const isLOggedIn=false
const outsideTemp= null
let userEmail;
const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);
//const bigNumber= 3456788888888888765n

// Reference (non primitive)
//array,objects,functions
const heros = ["saktiman","naagraj" ,"doga"]
let myObj={
    name: "abhishek",
    age: 21,
}
const myfunction=function(){
    console.log("Hello World")
}
console.log(typeof outsideTemp);

// ++++++++++++++++++++++++++++++++++++++++
//stack(primitive)(copy milegi) ,Heap(non-primitive)(original value milegi)
let myYoutubename="abhiyoutube"   //stack
let anothername=myYoutubename
anothername="vishiyoutube"
console.log(myYoutubename) 
console.log(anothername) // because here we gave the copy

//now we take the example of user data type
let userOne = {
    email:"abhi@google.com",
    upi: "user@ybl"
}
let userTwo=userOne;
userTwo.email="vishi@google.com"
console.log(userOne.email);
console.log(userTwo.email); //here we gave the exact value we use the heap type of memory
