const myArr = [1,2,3,4,5]; // [1,"hello",true,[2,3,4]] this is also valid

const myArr2 = new Array(6,7,8,9,10);

// console.log(myArr,myArr2);

// myArr.push(6); //push an element at end
// myArr.pop(); //pop an element from end

// myArr.unshift(6); // push an element in front

// myArr.shift(); //pop element from front

// myArr.includes();

// myArr.indexOf(2);

// const newArr = myArr.join('-'); // converts array to string

// console.log(newArr); // 1-2-3-4-5
// console.log(typeof newArr); // string

console.log(myArr);

// const newArr1 = myArr.slice(1,3); // doesn't change the original array

// console.log("Original Array",myArr); //1,2,3,4,5
// console.log("New Array",newArr1); // 2,3

// const newArr2 = myArr.splice(1,3); // changes the original array

// console.log("Original array",myArr); //1,5
// console.log("New Array 2",newArr2); // 2,3,4

//spread operator 

// const newArr = [...myArr,...myArr2]; //basically join two arrays concat can also be used (push cannot be used).

// console.log(newArr); 

const newArr = [1,2,3,[4,5,6,[7,8,[9,10]]],11,12,13];

const newArr2 = newArr.flat(3); // flattens the  array we need to provide the depth for that 

console.log(newArr2); // it will start flattening from outside one 

// flat (1) [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ], 11, 12, 13 ]
//flat (2) [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ], 11, 12, 13 ]