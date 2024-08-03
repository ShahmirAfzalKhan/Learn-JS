const name = "Shahmir"
const repoCount = 1

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shahmir-sh-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Shahmir   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://facebook.com"

console.log(url.replace('facebook', 'youtube'))

console.log(url.includes('Pakistan'))

console.log(gameName.split('.com'));