const score = "33abc";

console.log(typeof score);// string

const value = Number(score); //capital number is used to convert

console.log(typeof value); // number

console.log(value); // NaN 

// whenever we are converting string to number be careful it will not throw an error if string is not a number (NaN is assigned).

// "33" => 33
// "33abc" => NaN
// undefined => NaN
// true => 1

console.log(1+"2"); 12
console.log("1"+2); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32