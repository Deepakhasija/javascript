// function add(num1 , num2) {
//     return num1 + num2;
// }

// add.ans = 5;

// console.log(add(3,4));
// console.log(add.ans); // 5 we can do this (afterall everything is an object)
// console.log(add.prototype); // {}


const names = ["Deepak","Rohit","Mohinder"];

const obj = {
    laptop: 20000,
    bag: 700
}

Object.prototype.sayHello = function() {
    console.log(`Say Hello to everyone`);
}

obj.sayHello(); // sayHello successfully added to the object.
names.sayHello(); // same 

// if we add some method to object it will be added to function, string , array (because everthing is object ultimately).
// but vice versa is not true if we add something to array it will not be added to object.