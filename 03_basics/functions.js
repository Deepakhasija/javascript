
// function welcome(username) {
//     return `Welcome ${username}`
// }

// console.log(welcome()); // Welcome undefined (no value is assigned if we don't pass anything)
// To avoid above situation we can give defalut values

function totalPrice(val1,val2,...price) { // Rest operator (used when not sure how many arguments will be passed)
    return price;
}

console.log(totalPrice(100,200,300,4000));

function check({username:u,age:a}) {
    console.log(`Username is ${u} and age is ${a}`)
}

check({
    username:"Deepak Hasija",
    age: 20
})