// synchronus code = In an ordered sequence.
//                  Step-by-step linear instructions
//                  (start now, finish now)

// asynchronus code = Out of a sequence.
//                    EX: Access a database
//                        Fetch a file
//                        Tasks tht take time
//                    (start nown finish later)

//synchronus
console.log("start");
console.log("this is synchronus programming");
setTimeout(() => console.log("This is asynchronus pogramming"), 5000);
console.log("end");