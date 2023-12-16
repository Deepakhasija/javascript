
// for (let index = 0; index < 10; index++) {
//     const element = index;

//     console.log(element);
    
// }

// 

const arr = [1,2,3,4,5];

// for (const iterator of object) { // iterator is just like i and object is the data on which u will iterate
    
// }

// for (const val of arr) {
//     console.log(val);
// }

const map = new Map();

map.set('IN','India');
map.set('AUS','Australia');
map.set('Eng','England');

// console.log(map);

// for (const key of map) {
//     console.log(key);  //[ 'IN', 'India' ][ 'AUS', 'Australia' ][ 'Eng', 'England' ]

// }

// for (const [key,value] of map) {
//     console.log(key,value);  

// }

// Object cannot be used to iterate through an object like map in case of for of loop


const myObj = {
    Ind : 'India',
    Aus : 'Australia',
    Eng : 'England'
}

// for (const key in myObj) {
//     console.log(`key is ${key} and value is ${myObj[key]}`);
// }

// For Each


const countries = ["India","Australia","England"];

// countries.forEach(function (country) {
//     console.log(country);
// })

// countries.forEach((country,index,arr) => {
//     console.log(country,index,arr); 
// }) 

// function print(country) {
//     console.log(country);
// }

// countries.forEach(print)

const items = [
    {
        name : "mobile",
        price: 20000
    },
    {
        name : "laptop",
        price: 80000
    },
    {
        name : 'computer',
        price: 30000
    }
]

// items.forEach((item) => {
//     console.log(`Item is ${item.name} and price is ${item.price}`);
// })

//for each loop does not return anything. (for that we will use filter,map,reduce)


// const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter( (num) => num>4 );

// console.log(newNums);

// const newNums = nums.map( (num) => num+5);

// console.log(newNums);

// const newNums = nums
//               .map( (num) => num*10)             
//               .map( (num) => num+1)
//               .filter( (num ) => num >40)


// console.log(newNums);

// const total = nums.reduce( (acc,currval) => {
//     console.log(`acc : ${acc},currVal: ${currval}`);
//     return acc+currval;
// },0);

// console.log(total);

const total = items.reduce( (acc,item) => acc + item.price , 0);

console.log(total);










