// singleton (object.create)        objects ko literals ki tarah declare karte h toh singleton nhi banta h
//                   constractor se banega toh hamesha singleton banega

//objects literals

const mysym = Symbol("key1")
const JsUser = {
    name:"Abhishek",
    "full name" : "Abhishek Sharma"  ,    //ye value dot se access nhi kar sakte iske lie[] use karna padega
    [mysym] : "mykey1",
    age: 21,
    loction: "gwalior",
    email: "abhishek@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])


// JsUser.email = "abhishek@chatgpt.com"   //used to change the email
// Object.freeze(JsUser);      //USED TO FREEZ THE OBJECT AFTER THIS WE CANT HE CHANGE THE VALUE IN OBJECTS
// JsUser.email = "abhishek@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){

    console.log("Hello JS user");

}
JsUser.greetingTwo = function(){

    console.log(`Hello JS user,${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





