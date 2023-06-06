// callback = a function passed as an argument to another function
// Ensures that a function is not going
// to run before a task is completed.
// Helps us develop asynchronus code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems
// Ex: waiting for a file to load


sum (2, 3, displayConsole);

function sum(x, y, callBack){
  let result = x + y;
  callBack();
};

function displayConsole(output){
  console.log(output);
};

// changes the html element
function displayDom(output) {
  document.getElementById("myLabel").innerHTML = output;
}