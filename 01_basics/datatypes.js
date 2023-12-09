// primitive 

// 7 types : String,Number,Boolean,null,undefined,Symbol,bigInt

// non-primitive

// array , objects, functions

const id = Symbol('123');
const uniqueId = Symbol('123'); // this will return a symbol object

console.log(id === uniqueId); //false