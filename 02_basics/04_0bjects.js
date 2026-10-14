// const tinderUser = new object()      ye singleton object h
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "vishi"
tinderUser.isLoggedIn = false 
// console.log(tinderUser);
const regularUser = {
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"Abhishek",
            lastname:"Sharma"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//console.log(obj3);   //ese dono objects ko merge nhi kar sakte nhi toh same array wali problem aayegi
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
//console.log(obj3);     //it is the best method to combine the objects most of the time we use this methos


const users = [  //jab bhi database se values aayegi tab ye use karenge
{
    id: 1,
    email: "a@gmail.com"

},
{
    id: 2,
    email: "b@gmail.com"

}
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //isme hum check kar rhe h ye property object k paas h bhi yaa  nhi

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "abhi"
}
const {courseInstructor} =course
console.log(courseInstructor);

//but agar humko ye naam bada lag rha h toh hum isko destructure bhi kar sakte h
const {courseInstructor: instructor} =course
console.log(instructor);   //naam chota ho gya kaam wahi h
