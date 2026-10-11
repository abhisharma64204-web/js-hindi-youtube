const name="abhishek"
const repoCount= 50
//console.log(name + repoCount +" Value"); //its a old type we dont recomamd this because achha nhi lagta ye tarika

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('Abhi-shek')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Abhishek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://abhishek.com/abhishek%20sharma"
console.log(url.replace('%20','-'))

console.log(url.includes('abhishek'))

console.log(gameName.split('-'));
