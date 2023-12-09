// var c =300;


if(true) {
    let a = 10;
    const b = 20;
    var c = 30; 
}

// console.log(a);
// console.log(b);
// console.log(c); // prints 30 (which should not have been the case ideally)

function one() {
    const name1 = "hello "
    
    function two() {
        const name2 = "world"
        console.log(name1);
    }

    // console.log(name2); // will give an error not defined can't excess innner variable
    two();
}

// three();  // not valid 

const three = function() {
    console.log("hello world");
}

three();

one();