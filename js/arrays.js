// array = A variable that can store multiple values
// first element = index [0]
// last element = index [-1]


let fruits = ["apple", "orange", "banana"];

// turns apple to pear
fruits[0] = "pear";


// .push()
// pushes value to end of an array
fruits.push("coconut");

// .pop()
// removes the last element from an array
fruits.pop();

//.unshift()
// add elements to the beginning of an array
fruits.unshift("mango")

// .shift()
// removes element from the front of the array
fruits.shift();

// .lenth()
// finds the length of an array
let length = fruits.length;

// .indexOf()
// finds the index of a value in an array
let index = fruits.indexOf("orange");


// loop through an array
let prices = [5, 10, 15, 20];

for (let i = 0; i < prices.length; i+=1){
  console.log(prices[i]);
};

// loop through an array backwards
for(let i = prices.length - 1; i >= 0; i-=1){
  console.log(prices[i]);
};

// loop 
for (let price of prices){
  console.log(price);
};

// sorting an array of string

let foods = ["burger", "fries", "pizza", "tacos"];
foods = foods.sort();

// sorted in reverse by method chaining
foods = foods.sort().reverse();

