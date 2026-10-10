// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
//console.log("2">1);
//console.log("02">1);

console.log( null>0);
console.log(null==0);
console.log(null>=0);
//the reason is that an equality chech == and comparisions > <>= <= works differently.
//comperisions converts null to a number,treating it as 0.
//that's why (3) null>=0 is true and (1) null>0 is false.
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
//soo avoide all there types of comparision
//===strict check it checks its datatype also
console.log("2"===2);