// /*async function getData(){
//     return "async intro";
// }
// console.log(getData())*/
// //Async function always returns promise

// //Await always used inside async function,it uses infront of the promise
// // Await- it pauses the async function untill the promise return a result 
// /*const pro=new Promise((res,rej)=>{
//     setTimeout (()=>{
//         res("Payment done");
//     },3000)
// })
// async function getData() {
//     const res=await pro;
//     console.log(res)
//     console.log("Dashboard access")
// }
// getData();*/

// //Fetch API
// // fetch("https://jsonplaceholder.typicode.com/users") it returns a promise,if the link is correct then promise resolved
// //.the(response => response.json()).//.json() converts to Javascript object and also return a promise.
// // .then(json => console.log(json))

// /*async function getData(){
//     let response=await fetch("https://jsonplaceholder.typicode.com/users")
//     let json=await response.json()
//     console.log(json)
// }
// getData();*/
async function getData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let json=await response.json()
    console.log(json)

    } catch(err){
        console.log(err)

    }
}
getData() 