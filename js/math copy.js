/* 
  Arithmatic expressioon is a combinaton of..
  Operands ( values, variables, etc.)
  Operators ( + - * / %)
  that can be evaluated to  a value
  Example: y = x + 5;

*/

/* 
  + Add
  - Substract
  * Multiply
  / Divide
  % Remainder ( can find even or odd )
*/
/* 
  Operator precedence
  1. Parenthesis ()
  2. Exponents
  3. Multiplication & Division
  4. Addition & Substraction
*/

let students = 20;

// All the same thing
students = students + 1;
students += 1;
students++;

console.log(students);


// Examples
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;
let piExample;

// Pi
piExample = Math.PI;


// Rounding
x = Math.round(x);

// Rounding down
x = Math.floor(x);

// Rounding up
x = Math.ceil(x);

// Raising power ( Exoponent ) ( second number is the pow)
x = Math.pow(x, 2);

// Square root
 x = Math.sqrt(x);

 // Absolute value ( distance away from 0 )
 x = Math.abs(x);

// Maximum
maximum = Math.max(x, y, z)
// you will get 9

// Minumum
minimum = Math.min(x, y, z);
// you will get 3.14

