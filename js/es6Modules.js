// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book

// <script type="module" src="index.js"> </script>

// import {PI, getCircumference, getArea} from "./es6Modles.js"

// importing everything:
// import * from "./es6Modules.js"

export const PI = 3.14159;

export function getCircumference(radius){
  return 2 * PI * radius;
}

export function getArea(radius){
  return PI * radius * radius;
}

