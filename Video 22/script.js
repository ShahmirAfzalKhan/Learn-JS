function one(){
    const username = "Shahmir"

    function two(){
        const website = "Facebook"
        console.log(username);
    }
    console.log(website);

     two()

}
// one()

if (true) {
    const username = "Shahmir"
    if (username === "Shahmir") {
        const website = " LinkedIn"
        // console.log(username + website);
    }
    // console.log(website);
}

console.log(username);
console.log(addone(5))

function addone(num){
    return num + 1
}
addTwo(5)
const addTwo = function(num){
    return num + 2
}