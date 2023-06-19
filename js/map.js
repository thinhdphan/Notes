// Map = object that holds key-value pairs of any data-type
// EX: products with prices
const store = new Map([
  ["t-shirt", 20],
  ["jeans", 40],
  ["socks", 10],
  ["underwear", 25]
]);

let shoppingCart = 0;
shoppingCart += store.get("t-shirt");
shoppingCart += store.get("jeans");
console.log(shoppingCart);

// add object
store.set("hat", 30);

// delete
store.delete("hat");

// has
// true
store.has("jeans");

// checking size
store.size;


store.forEach((value, key) => console.log(`${key} $${value}`));