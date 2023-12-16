 // Imediately Invoked function expresssions

 (function connect() {
    //Named iife
    console.log(`DB Connected`);
 }) ()  ; // if we want to write two iife in code need to mention semi colon in the end  

((userName) => {
    console.log(`Hello user ${userName}`);
}) ("Deepak Hasija") ; 