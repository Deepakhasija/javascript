// Singleton 
// Object.create() 

//Object Literals

const user = {
    name : "Deepak",
    age: 20,
    present : true,
    "email" : "deepakhasija259@gmail.com",
    "full name" : "Deepak Hasija"
};

// console.log(user.email); // correct
// console.log(user["full name"]); // If we want to access full name need to follow this convention

// Object.freeze(user); // to lock an object

// user.greeting2 = function() {
//     console.log(`hello user,${this["full name"]}`);   //correct 
// }

// console.log(user.greeting);   // prints reference of the function

// user.greeting2();

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const obj3 = Object.assign({},obj1,obj2); // {} will work as target object rest are source

const obj4 = {...obj1,...obj2};

// console.log(obj3,obj4); // same assign and spread are used for combining the object

console.log(Object.keys(user)); // returns an array with all the keys
console.log(Object.values(user));


// Object Destructing

const {name:n,age,present} = user;

console.log(n,age,present); 