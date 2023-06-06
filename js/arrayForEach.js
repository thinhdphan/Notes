// array.forEach() = executes a provided callback function once for each array element
// The prefer way to loop through an array
// Can take a second parameter or the index 
// If you need to break, use a regular for loop 


let students = ["thinh", "jade", "onion"];



students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index array) {
  // capitalize first letter of strings in array
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element)
}