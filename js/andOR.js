// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true

let temp=,  15;
let sunny = true;

// AND &&
// Both statements have to be true in order to execute the if
if (temp > 0 && temp < 30) {
  console.log("The weather is nice!");
} else {
  console.log("The weather is bad!");
}

// Example 2
if (temp > 0 && temp < 30 && sunny) {
  console.log("The weather is nice!");
} else {
  console.log("The weather is bad!");
}


// OR ||
// One statement only has to be true for if to excecute
if (temp <=0 || temp >= 30) {
  console.log("The weather is nice!");
} else {
  console.log("The weather is bad!");
}