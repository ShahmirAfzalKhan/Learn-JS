
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("I");
    console.log("R");
}

// sayMyName()
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("result: ", result);

function loginUserMessage(username = "Afzal"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Afzal"))
console.log(loginUserMessage("Afzal"))


