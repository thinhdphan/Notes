// spread operator = allows an interable such as an
//                   array or string to be expanded 
//                   in places where zero or more arguments are expected
//                      (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);

// "T h i n h P h a n"
let name = "Thinh Phan";
console.log(...name);

let class1 = ["thinh", "jade", "solomon"];
let class2 = ["miguel", "joe", "stephen"];

// this will push class2 into class1
class1.push(...class2);