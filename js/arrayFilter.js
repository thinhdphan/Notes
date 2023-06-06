// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let ages = [18, 21, 17, 16, 23, 22];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge (element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}