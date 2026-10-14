function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
}

sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
addTwoNumbers(3,4);


function addTwoNumbers(number1,number2){
   let result = number1 +number2
   return result
}
const result = addTwoNumbers(3,5)
//console.log("Result:",result);


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Abhishek"));


//rest operator...
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))

const user = {
    username : "abhishek",
    price: 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`)
    
}
//handleobject(user)
handleobject({
    username: "sami",
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondary(getArray){
    return getArray[1]
}
console.log(returnSecondary(myNewArray));
