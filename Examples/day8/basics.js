// old approach
//let add = require("./calci.js").add;

console.log("first statement");
setTimeout(()=>{
    console.log("second statement");
    setTimeout(()=>{
        console.log('another asyn task runs after 100ms')
    }, 0);
}, 0);

console.log("third statement");