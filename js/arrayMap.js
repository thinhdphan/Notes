// array.map() = executes a provided callback function
//               once for each array element
//               AND creates a new array


let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);


function square(element) {
  return Math.pow(element, 2);
}

function printElement(element){
  console.log(element);
}

function cube(element){
  return Math.pow(element, 3);
}



// shorthand if only using one value 
[1, 1, 3].map(value => value * 2);

[1, 1, 3].map((value, i) => {
  return value * 2;
});
