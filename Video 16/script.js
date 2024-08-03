

const mySym = Symbol("key1")


const JsUser = {
    name: "Shahmir",
    "full name": "Shahmir Afzal",
    [mySym]: "mykey1",
    age: 18,
    location: "Lahore",
    email: "Shahmir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Shahmir@google.com"
Object.freeze(JsUser)
JsUser.email = "Shahmir@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());