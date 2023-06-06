// rest parameters = represents an indefinite number of parameters
//                (packs argument into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function (a, b, c, d, e){
  return a + b + c + d + e;
};

// rest parameter

function sum(...numbers){
  let total = 0;
  for (let number of numbers){
    total += number
  }
  return total
}