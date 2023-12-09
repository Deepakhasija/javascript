
// console.log(this); // will give an empty object when run in node environment it will not be empty when run in browser.

// const user = {
//     userName: "Deepak Hasija",
//     age: 20,
//     welcome : function() {
//         console.log(`Welcome to our platform ${this.userName}`);
//     }
// }

// user.welcome();

// user.userName = "Sunny Mehra"; 

// user.welcome();

// function user2() {
//     const userName = "Deepak Hasija"
//     console.log(this.userName); // nothing like context in function works only for object (but we have other methods in this)
// }

// user2();

//arrow funtions 

// const addTwo = (num1,num2) => {
//     return num1+num2; 
// }

const addTwo = (num1,num2) => (num1+num2);  //implicit (if we use curly braces we need to have return statement)
// paranthesis in above statement are optional
console.log(addTwo(3,5));


const welcome = () => ({usename : "deepak",age:20}); // if we wan't to return an object

console.log(welcome());