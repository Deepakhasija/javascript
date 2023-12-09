const accountId = 12245;
let accountEmail = "deepakhasija259@gmail.com"; 
var accountCity = "Delhi"; // not used anymore due to block scope
accountValue = 20000;

let accountState; // will de undefined due to hoisting

console.table([accountId,accountCity,accountEmail,accountValue,accountState]);//print values in a tabular format