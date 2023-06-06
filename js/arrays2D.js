// 2D array = An array of arrays

let fruits = ["bananas", "apples", "oranges"];
let vegetables = ["carrots", "onions", "broccoli"];
let meats = ["fish", "turkey", "chicken"];

let groceryList = [fruits, vegetables, meats];

// selecting specific element
// bananas
groceryList[0][0];

for (let list of groceryList){
  for (let foodItem of list){
    console.log(foodItem);
  }
}