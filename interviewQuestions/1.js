// PRINT 1-5 1 after 1 sec 2 after 2 sec and so on
for(var i=1;i<=5;i++){ // var will not work let will work because let is block scoped (every time loop runs new variable will be formed if we use let)
    function x(i) {
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    x(i);
}

// when enclosed within x whenever we pass it to x it will have a new instance which it will refer to in setTimeout closure.

// function print() {
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("hello");
//             resolve();
//             console.log("hello after resolve")
//         }, 5000);
//     })
//     return pr;
// }

// const promise = print();

// promise.then(function(){
//     console.log("suiiii")
// })

// console.log("world");
