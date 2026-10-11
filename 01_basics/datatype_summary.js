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