// const promiseOne = new Promise(function(resolve,reject) {
//     //Async operations and DB calls

//     setTimeout(function(){
//         console.log("Task is incompleted");
//         resolve(); // We need to connect resolve to then
//         console.log("Task is completed");
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })


// new Promise(function(resolve,reject) {
//     //Async operations and DB calls

//     setTimeout(function(){
//         console.log("Async Task is completed");
//         resolve(); // We need to connect resolve to then
//     },1000)
// }).then(function(){
//     console.log("async resolved");
// })

// new Promise(function(resolve,reject) {

//     setTimeout(function(){
//         console.log("Async Task is completed");
//         resolve({user:"Deepak Hasija",email:"deepakhasija259@gmail.com"}); // we can pass the data in resolve
//     },1000)
// }).then(function({user,email}){
//     console.log(`user is ${user} and email is ${email}`);
//     console.log("async resolved");
// })

// new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         let error = true;
//         if(!error) {
//             console.log("Async Task is completed");
//             resolve({user:"Deepak Hasija",email:"deepakhasija259@gmail.com"}); // we can pass the data in resolve
//         } else {
//             console.log("Async task throws error");
//             reject({text:"unexpected error occured"});
//         }
//     },1000)
// }).then(function({user,email}){
//     console.log(`user is ${user} and email is ${email}`);
//     console.log("async resolved");
// }).catch(function({text}) {
//     console.log(`async rejected reason:${text}`);
// })


const p1 = new Promise( (resolve,reject)  => {
    setTimeout(() => {
        resolve("Promise1 resolved successfully");
    }, 10000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved successfully");
    }, 5000);
})


const handlePromise = async () => {

    console.log("entry");

    const val1 = await p1;
    console.log("promise 1");
    console.log(val1);

    const val2 = await p2;
    console.log("promise 2");
    console.log(val2);

    console.log("exit");
}

handlePromise();

//entry printed immediately
//promise 1 and promise 2 after 10 secs 

// fetch is recently added in nodejs.
// axios is better then fetch there are so many reasons for this so prefer using axios.



