const myDate = new Date();

console.log(typeof myDate); //objectx

console.log(myDate); //2023-12-07T18:37:59.631Z

console.log(myDate.toString()); //Fri Dec 08 2023 00:09:45 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Fri Dec 08 2023

console.log(myDate.toISOString()); //2023-12-07T18:41:18.409Z

console.log(myDate.toJSON()); //2023-12-07T18:42:00.299Z

console.log(myDate.toLocaleString()); //12/8/2023, 12:12:36 AM

console.log(myDate.toLocaleDateString()); //12/8/2023

const createdDate = new Date("1-14-2023");

const myTimeStamp = Date.now();

console.log(myTimeStamp); // 1701975103221 (epoch Time ) milliseconds from 1 jan 1970

console.log(createdDate.getTime()); //same as above (epoch time)