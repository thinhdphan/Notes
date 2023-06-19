// console.time() = Starts a timer you cna use to
//                  track how long an operation takes
//                  Gives each timer a unique name.


// start
console.time("Response time");

setTimeout(() => console.log("Hello"), 3000);

//end
console.timeEnd("Response time");