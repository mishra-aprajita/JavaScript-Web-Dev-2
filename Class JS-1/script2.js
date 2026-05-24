const { startTransition } = require("react");

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("then 1");
  })
  .then(() => {
    console.log("then 2");
  });

console.log("End");


/*-------------------------------------------------------
-------------------------------------------------------*/

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("then");
});

console.log("End");

/*start
End
then
setTimeOut*/
/*Step-by-step
Sync code runs
Start
End
Microtask runs
then
Macrotask runs
setTimeout*/
