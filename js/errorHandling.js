// error = object with a description of
//        something went wrong
// throw = executes a user-defined error

//  Can't open a file
//  Lose connection
//  User types incorrect inout
//  TypeError

try {
  let x = window.prompt("Enter a #");
  x = Number(x);
  
  if (isNaN(x)) throw "That wasn't a number";
  if (x == "") throw "this was empty";
  console.log(`${x} is a number`);
}

catch(error){
  console.log(error);
}
// always runs
finally{
  console.log("This will always execute. end");
}
