// if state = a basic form of decision making
//            if a condition is true, then do something
//            if not, then don't do it


let age = 21;

// if, else if, else,
// The order of the if statement matters depending on what you're comparing
if (age >= 65){
  console.log("You are a senior citizen!");
} 
else if (age < 0) {
  console.log("You haven't been born yet!");
} 
else if (age >= 21) {
  console.log("You are an adult!");
}
else {
  console.log("You are a child!");
};

// Example

let online = true;

if (online) {
  console.log("You are online!");
}
else {
  console.log("You are offline!");
};