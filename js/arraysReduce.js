// array.reduce() = reduces an array to a single value
// summing up values such as items in a shopping cart array

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`the total is: $${total}`);

function checkOut (total, element) {
  return total + element;

}