const firstName = "Deepak"
const lastName = "Hasija"

const fullName = firstName + lastName;

// console.log(`My full name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);

// console.log(fullName.length);
// console.log(firstName.charAt(3));
// console.log(firstName.indexOf('k'));

// console.log(firstName.substring(0,4)); // (start index,last index) last index is not included
// console.log(fullName.slice(-6,8));  // (Ha) like substring but negative can be given it will start from end in case of negative


const name = new String('   Deepak Hasija   '); // this will provide a lot of string functions as well

// console.log(typeof name); // Object
// console.log(name.trim()); // Deepak Hasija (will remove spaces from front and back)
// console.log(name.replaceall('D','H')); // will replace first found one for all use replaceAll.
// console.log(name.split(" ")); // converts string to an array 



// MATHS   //


console.log(Math.floor((Math.random()*10)+1)); // will give me value between 1-10 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); //Formula for a range