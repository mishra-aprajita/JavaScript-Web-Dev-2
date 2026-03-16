// promise outcome based questions practice.
let pro = new Promise((res,rej)=>{
    let a=10;
    if(a>50){
        res();
    }
    else{
        rej()
    }
})
pro.then(()=>{
    console.log("promise resolved")
})
.catch(()=>console.log("promise rejected"))

// Promises: used to manage asynchronous code effectivly 
// better than callback hell. And advantages are easy to manage the codes, 
// easy to debugger, code readability is good.

// Promise has 3 states. 
// pending :
// fullfilled:
// rejected:

// Promise Consumers :
// 1. .then(): when promise resolved then it is going to .then
// 2. .catch(): when promise rejected it is goinf to .catch to handle the error.

// .finally():finally will run every time a promise defined weather the
//  prmose resolved or rejected


// function pro() {
//    return new Promise((res, rej) => {
//         let a = 10;
//         if (a > 50) {
//             res();
//         }
//         else {
//             rej()
//         }
//     })
// }
// pro()
// .then(() => console.log("promise resolved"))
// .catch(() => console.log("promise rejected"))
// .finally(()=>console.log("inside finally"))




// lets say im using onclick, setTimeout, promises in the code. so it will be 
// resides inside WEB API.

// callback queue: 
// 1. microtask queue: it will store promise. it will executes first.
// 2. macrotask queue:it will store rest of the async code.

// Event Loop: it is a constntly running process which keeps track of callstack, 
// when it found the callstack is empty(when sync function executes) then it will 
// push one by one async function from callback queue to callstack. 

// Guess the output and explain the reason behind it
// Example-1

// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000);
// setTimeout(()=>{
//     console.log("c")
// },3000);
// setTimeout(()=>{
//     console.log("d")
// },2000);
// console.log("e");

// Promise has the priority: 
// Example-2

// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },0);
// Promise.resolve().then(() => {
//  console.log("Promise");
// });
// console.log("e");
