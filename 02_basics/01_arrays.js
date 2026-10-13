//arrays

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);
const myHeros = ["saktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.group(myArr[1]);

//array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()   //remove last value of array
// myArr.unshift(9)     //it adds the value at starting of the array
// myArr.shift()      //it removes the starting value
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //converts the array into string

// console.log(myArr);
// console.log(newArr);

//slice,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr)

const myn2 = myArr.splice(3)
console.log("C ", myArr);
console.log(myn2);

console.log(myArr);


