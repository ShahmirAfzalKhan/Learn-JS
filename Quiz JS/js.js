// Given a string let message = "Welcome to JavaScript Programming!", write a function extractFirstWord that returns the first word of the string.

let string = "Welcome to JavaScript Programming!"

function FirstWord(){
    let word = string.split(' ')[0]
    console.log(word)
}

FirstWord()

// Write a function maskEmail that takes an email string as input and masks it, showing only the first letter of the username and the domain, e.g., j*****@gmail.com.

let email = "Random@gmail.com"

function mask(email){
    let mask = (email = ' ') => {
        let [name, domain] = email.split('@')
        let maskfirst = name[0] + '*****'
        mask = maskfirst + '@' + domain
        return mask
        
    }
}

console.log(mask(email))

// Given an array of numbers let numbers = [1, 2, 3, 4, 5], write a function doubleNumbers that returns a new array where each number is doubled.

let numbers = [1, 2, 3, 4, 5]

function doublenumer(numbers) {
    doublenumbers = []
    for( i = 0; i < numbers.length; i++){
        doublenumbers.push(numbers[i]*2)
    }
    return doublenumbers;
}

console.log(doublenumer(numbers));

// Write a function removeDuplicates that takes an array of strings as input and returns a new array without duplicate values. Use appropriate array methods to solve this.

function removeduplicate(dup){
    let singlearr = []
    for ( i = 0; i < dup.length; i++) {
        if (!singlearr.includes(dup[i])) {
            singlearr.push(dup[i]);
        }
    }
    return singlearr;
}
let fruits = ["apple", "banana", "apple", "orange", "banana"]
console.log(removeduplicate(fruits))

let student = {
    name : 'Gone',
    age: 26,
    subject : []
}

function addSubject(student, newsub) {
    student.subject.push(newsub);

}

addSubject(student, "Mathematics")
console.log(student.subject);

// Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both. If a property exists in both objects, the value from the second object should be used.


let objject1 = { name: "John", age: 25 };
let objject2 = { age: 30, city: "New York" };

function merge(objject1 , oobjject2) {
    let mergeObject = {};

    for (let key in objject1) {
        if (objject1.hasOwnProperty(key)) {
            mergeObject[key] = objject1[key];
        }
    }
    for (let key in objject2) {
        if (objject2.hasOwnProperty(key)) {
            mergeObject[key] = objject2[key];
        }
    }

    return mergeObject;
}

let mergedObject = merge(objject1, objject2);
console.log(mergedObject);

// Write a function sumOfNumbers that takes an array of numbers as input and returns the sum of all numbers using a loop.

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum)
    return sum;
}

sumOfNumbers([10, 20, 30, 40]);

// Write a function findLongestWord that takes an array of words and returns the longest word in the array using a loop.

function findLongestWord(words) {
    let lw = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > lw.length) {
            lw = words[i]; 
        }
    }
    return lw;
}

console.log(findLongestWord(["apple", "banana", "cherry", "blueberry"]))


// Rewrite the following function using an arrow function:
const multiply = (a, b) => {
    return a * b;
}

//  Write an arrow function filterEvenNumbers that takes an array of numbers and returns an array of only the even numbers.
const filterEvenNumbers = num => num.filter(number => number % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


// Write a function fetchData that fetches data from a URL (use any public API) and logs the data to the console. Use fetch and .then() to handle the asynchronous operation.

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('error:', error));
}
fetchData();

// Modify the fetchData function to use async/await instead of .then() to handle the asynchronous operation.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('error:', error);
    }
}
fetchData();
